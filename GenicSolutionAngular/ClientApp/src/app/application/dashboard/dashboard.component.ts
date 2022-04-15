import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Chart } from 'angular-highcharts';
import { Subject } from 'rxjs/internal/Subject';
import { AuthenticationService, Login } from 'src/app/services';
import { DashboardTicketChart, DashboardTicketPieChart } from 'src/app/services/dashboard.module';
import { DashboardService } from 'src/app/services/dashboard.service';
import { EngineerService } from 'src/app/services/engineer.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { QuoteService } from 'src/app/services/quote.service';
import { Ticket } from 'src/app/services/ticket.module';
import { TicketService } from 'src/app/services/ticket.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  currentUser: Login;
  CustomerDurationType: string;
  TicketDurationType: string;
  AverageRevenueType: string;
  columnchart: Chart;
  piechart: Chart;
  pieChartData: any;
  piedata: any;
  dropdownbtncustomer: string;
  dropdownbtnticket: string;
  dropdownbtnavgrev: string;
  localPrependUrl: string;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtOptions2: DataTables.Settings = {};
  dtTrigger2: Subject<any> = new Subject();
  tempEngineerList: any;
  tempEngineerList2: any;
  constructor(
    public titleService: Title,
    public ticketservice: TicketService,
    public quoteService: QuoteService,
    public invoiceservice: InvoiceService,
    public engineerservice: EngineerService,
    public service: DashboardService,
    public loginservice: AuthenticationService,
    public genicprofileservice: GenicProfileService,
    private router: Router
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.tempEngineerList = [];
    this.tempEngineerList2 = [];
  }

  ngOnInit() {
    if(this.validateUser()) {
    if (!this.currentUser.Permissions.DashboardAdmin) { this.router.navigate(['/drive/my-drive']); }
    this.titleService.setTitle('Dashboard | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, pageLength: 5, ordering: false, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
    this.dtOptions2 = { pagingType: 'full_numbers', paging: true, pageLength: 5, ordering: false, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
    this.dropdownbtncustomer = 'THIS MONTH';
    this.dropdownbtnticket = 'THIS MONTH';
    this.dropdownbtnavgrev = 'THIS MONTH';
    this.piechart = new Chart({});

    // ** Dashboard Customer Data Get */
    this.service.refrestDashboardCustomer(this.currentUser.Token);
    this.CustomerDurationType = 'month';

    // ** Dashboard Customer Data Get */
    this.service.refrestDashboardTicket(this.currentUser.Token);
    this.TicketDurationType = 'month';

    // ** Dashboard Total Data Get */
    this.service.refrestDashboardTotal(this.currentUser.Token);

    // ** Dashboard Average Revenue Data Get */
    this.service.refrestDashboardAvegareRevenue(this.currentUser.Token);
    this.AverageRevenueType = 'month';

    // ** Dashboard TicketDue Data Get */
    this.service.refrestDashboardTicketDue(this.currentUser.Token);

    this.loadcolumnchart();
    this.loadPiechart();
    this.loadticketlist();
    this.distroyAndReloadTable();
    }
    // ** engineer list initialize */
    // this.engineerservice.refrestEngineerTableList(this.currentUser.Token);

  }

  loadticketlist() {
    this.ticketservice.Ticketlist = [];
    this.ticketservice.getTickets(this.currentUser.Token, 1).subscribe( res => {
      const response = res as any;
      this.ticketservice.Ticketlist = response.result as Ticket[];
      this.dtTrigger.next();
    }
    , error =>  console.log(error));
  }
  loadcolumnchart() {
    this.service.DashboardTicketChart = null;
    this.service.refrestDashboardTicketColumnChart(this.currentUser.Token).subscribe( res => {
    this.service.DashboardTicketChart = res as DashboardTicketChart;
    this.createColumnChart();
  }
    , error =>  console.log(error));
  }
  loadPiechart() {
    this.service.DashboardTicketPieChartList = [];
    this.service.refrestDashboardTicketPieChartList(this.currentUser.Token).subscribe( res => {
      this.service.DashboardTicketPieChartList = res as DashboardTicketPieChart[];
      this.pieChartData = this.service.DashboardTicketPieChartList;
      this.piedata = [];
      this.pieChartData.DashboardTicketPieChart.forEach(element => {
          {
            this.piedata.push({ name: element.Name + ' (' + element.Count + ')', y: element.Count });
          }
      });
      this.createpiechart();
     }
    , error =>  console.log(error));
  }
  distroyAndReloadTable(): void {
    this.engineerservice.refrestEngineerTableList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 this.tempEngineerList = this.tempEngineerList2 = response.result;
                 this.dtTrigger2.next();
      }}, error =>  console.log(error));
  }
  ViewTicketDetails(x: Ticket) {
    this.ticketservice.formData = Object.assign({}, x);
    this.router.navigate(['/tickets/ticket-view-detail/']);
  }
  ViewInvoiceDetails(InvoiceId: string) {
    try{
      this.invoiceservice.refreshInvoiceById(InvoiceId, this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
         this.invoiceservice.InvoiceData = response.result;
         setTimeout(() => {
          this.router.navigate(['/invoices/invoice-details']);
         }, 200);
        }
      }, error =>  console.log(error)) ;
    } catch {}
  }
  // View Quote Details
 viewQuoteDetails(x: Ticket) {
  this.quoteService.getQuoteDetails(x.TicketConvertedID)
 .subscribe( res => {
   if (res) {
    let obj: any = new Object();
    obj = res;
    this.quoteService.QuoteData = obj;
    this.quoteService.getQuoteItems(this.currentUser.Token, x.TicketConvertedID).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.quoteService.QuoteItemList = response.result;
                  }
    }}, error =>  console.log(error));
    this.quoteService.getQuoteAttachments(x.TicketConvertedID);

    setTimeout(() => {
     this.router.navigate(['/quotes/quote-Details']);
    }, 1000);
   }
 }, error =>  console.log(error)) ;
}

  ngAfterViewInit() {
  }
  CalculateCustomer(value: string) {
    this.service.refrestDashboardCustomer(this.currentUser.Token, value);
    this.dropdownbtncustomer = 'THIS ' + value;
    this.CustomerDurationType = value.toLowerCase();
  }
  CalculateTicket(value: string) {
    this.dropdownbtnticket = 'THIS ' + value;
    this.service.refrestDashboardTicket(this.currentUser.Token, value);
    this.TicketDurationType = value.toLowerCase();
  }
  CalculateAverage(value: string) {
    this.dropdownbtnavgrev = 'THIS ' + value;
    this.service.refrestDashboardAvegareRevenue(this.currentUser.Token, value);
    this.AverageRevenueType = value.toLowerCase();
  }
  onHyperlinkClick(t: number) {
    this.router.navigate(['/tickets/'], { queryParams: { 't': t }});
  }
  createColumnChart() {
    this.columnchart = new Chart({
      chart: {
        renderTo: 'container',
        width: 500,
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
        floating: true,
        squareSymbol: true,
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
                    this.service.DashboardTicketChart.TicketChartTodayHeigh,
                    this.service.DashboardTicketChart.TicketChartTomarrowHeigh,
                    this.service.DashboardTicketChart.TicketChartThisWeekHeigh
                  ],
                },
                {
                  type: 'column',
                  name: 'Medium',
                  data: [
                    this.service.DashboardTicketChart.TicketChartTodayMedium,
                    this.service.DashboardTicketChart.TicketChartTomarrowMedium,
                    this.service.DashboardTicketChart.TicketChartThisWeekMedium
                  ],
                },
                {
                  type: 'column',
                  name: 'Low',
                  data: [
                    this.service.DashboardTicketChart.TicketChartTodayLow,
                    this.service.DashboardTicketChart.TicketChartTomarrowLow,
                    this.service.DashboardTicketChart.TicketChartThisWeekLow
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
        width: 500,
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
          minWidth: 200,
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
  detailsengineer(x: string) {
    this.router.navigate(['/engineers/engineer-details/' + x]);
  }
  addcustomer(): void {
    this.router.navigate(['/customers/customer-add/']);
  }
  validateUser(): boolean{
    switch(this.currentUser.Type){
      case 'Admin':
      case 'SubAdmin': this.router.navigate(['/dashboard']);  return true;
      case 'Engineer': this.router.navigate(['/engineer/engineer-dashboard']);  return false;
      case 'Customer': this.router.navigate(['/customer/customer-dashboard']); return false;
      default: this.loginservice.logout(); return false;
    }
  }
}
