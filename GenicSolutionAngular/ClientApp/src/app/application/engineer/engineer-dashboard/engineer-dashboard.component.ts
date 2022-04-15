import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { Chart } from 'angular-highcharts';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/services/ticket.module';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs/internal/Subject';
import { EDTicket, EDTicketChart, EDTicketDue } from 'src/app/services/dashboard.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-engineer-dashboard',
  templateUrl: './engineer-dashboard.component.html',
  styleUrls: ['./engineer-dashboard.component.css']
})
export class EngineerDashboardComponent implements OnInit, AfterViewInit {
  currentUser: Login;
  columnchart: Chart;
  piechart: Chart;
  piedata: any;
  localPrependUrl: string;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(
    public titleService: Title,
    public service: DashboardService,
    public loginservice: AuthenticationService,
    public ticketservice: TicketService,
    private router: Router
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
  }

  ngOnInit() {
    if (this.validateUser()) {
    this.dtOptions = { pagingType: 'full_numbers', paging: true, pageLength: 5, ordering: false, lengthMenu: [5, 10, 25, 50, 75, 100] };

    this.service.refrestEDTotal(this.currentUser.Id).subscribe(res => {
      this.service.EDTicket = res as EDTicket;
    }, error => console.log(error));

    this.service.refrestEDTicketDue(this.currentUser.Id).subscribe(res => {
      this.service.EDTicketDue = res as EDTicketDue;
    }, error => console.log(error));

    this.loadcolumnchart();
    this.loadPiechart();

    this.ticketservice.getTickets(this.currentUser.Token, 1).subscribe(
      res => {
        const response = res as any;
        this.ticketservice.Ticketlist = [];
        this.ticketservice.Ticketlist = response.result as Ticket[];
      }, error => console.log(error));
  }
  this.titleService.setTitle(this.currentUser.Engineer + ' Dashboard | Genic Solution');
}
  loadcolumnchart() {
    this.service.EDTicketChart = null;
    this.service.refrestEDTicketColumnChart(this.currentUser.Id).subscribe(res => {
      this.service.EDTicketChart = res as EDTicketChart;
      this.createColumnChart();
    }, error => console.log(error));
  }
  loadPiechart() {

    this.service.refrestEDTicketPieChartList(this.currentUser.Id).subscribe(res => {
      const response = res as any;
      this.piedata = [];
      response.PieChart.forEach(element => {
        {
          this.piedata.push({ name: element.Name + ' (' + element.Count + ')', y: element.Count });
        }
      });
      this.createpiechart();
    }, error => console.log(error));
  }
  ngAfterViewInit() {
  }
  ViewTicket(x: Ticket) {
    this.ticketservice.formData = Object.assign({}, x);
    this.router.navigate(['/engineer/engineer-tickets/myticketdetails']);
  }
  ViewTicketRefDetails(TicketId: string) {
    try{
    this.ticketservice.formData = this.ticketservice.Ticketlist.filter(s=> s.TicketId == TicketId)[0];
    this.router.navigate(['/engineer/engineer-tickets/myticketdetails']);
    } catch {}
  }
  createColumnChart() {
    this.columnchart = new Chart({
      chart: {
        renderTo: 'container',
        width: 540,
      },
      xAxis: {
        categories: ['Today', 'Tomorrow', 'This Week']
      },
      plotOptions: {
        series: {
          pointStart: 0,
          borderWidth: 0,
          shadow: false
        }
      },
      legend: {
        layout: 'proximate',
        align: 'right',
        verticalAlign: 'top',
        padding: 0,
        floating: true,
        backgroundColor: 'transparent'
      },
      responsive: {
        rules: [{
          condition: {
            minWidth: 500,
          }
        }]
      },
      series: [
        {
          type: 'column',
          name: 'High',
          data: [
            this.service.EDTicketChart.TicketChartTodayHeigh,
            this.service.EDTicketChart.TicketChartTomarrowHeigh,
            this.service.EDTicketChart.TicketChartThisWeekHeigh
          ],
        },
        {
          type: 'column',
          name: 'Medium',
          data: [
            this.service.EDTicketChart.TicketChartTodayMedium,
            this.service.EDTicketChart.TicketChartTomarrowMedium,
            this.service.EDTicketChart.TicketChartThisWeekMedium
          ],
        },
        {
          type: 'column',
          name: 'Low',
          data: [
            this.service.EDTicketChart.TicketChartTodayLow,
            this.service.EDTicketChart.TicketChartTomarrowLow,
            this.service.EDTicketChart.TicketChartThisWeekLow
          ],
        }
      ],
    });
  }

  createpiechart() {
    this.piechart = new Chart({
      chart: {
        renderTo: 'container',
        plotShadow: false,
        width: 540,
        type: 'pie'
      },
      title: {
        text: 'Chart title'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true
        }
      },
      legend: {
        layout: 'proximate',
        align: 'right',
        verticalAlign: 'top',
        padding: 0,
        floating: true,
        backgroundColor: 'transparent'
      },
      responsive: {
        rules: [{
          condition: {
            minWidth: 500,
          }
        }]
      },
      series: [{
        type: 'pie',
        name: 'Total',
        data: this.piedata
      }]
    });
  }
  validateUser(): boolean{
    switch(this.currentUser.Type){
      case 'Admin':
      case 'SubAdmin': this.router.navigate(['/dashboard']);  return false;
      case 'Engineer': this.router.navigate(['/engineer/engineer-dashboard']);  return true;
      case 'Customer': this.router.navigate(['/customer/customer-dashboard']); return false;
      default: this.loginservice.logout(); return false;
    }
  }
}
