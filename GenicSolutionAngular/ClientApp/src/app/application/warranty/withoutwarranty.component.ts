import { Component, OnInit, ViewChild, OnDestroy, TemplateRef, AfterViewInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { ReportsUnWarranty } from '../../services/report.module';
import { AuthenticationService, Login } from '../../services';
import { GenicProfileService } from '../../services/genicprofile.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { ProductService } from '../../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../../services/ticket.service';
import { UserlogService } from '../../services/userlog.service';
import { ToastrService } from 'ngx-toastr';
import { TicketItem } from '../../services/ticket.module';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-withoutwarranty',
  templateUrl: './withoutwarranty.component.html',
  styleUrls: ['./warranty.component.css']
})
export class WithoutWarrantyComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('modalContent2', { static: true }) modalContent2: TemplateRef<any>;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  currentUser: Login;
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  isShowSpinner: boolean = false;
  localPrependUrl: string;
  constructor(public service: ReportService,
    public titleService: Title,
              private router: Router,
              private modal: NgbModal,
              public logService: UserlogService,
              private toastr: ToastrService,
              public loginservice: AuthenticationService,
              public ticketService: TicketService,
              public customerservice: CustomerService,
              public productService: ProductService,
              public genicprofileservice: GenicProfileService) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
  }

  ngOnInit() {
    if (!this.currentUser.Permissions.ProductWarranty) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Without Warranty | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
    this.service.refrestUnWarrantyList(this.currentUser.Token, 'ALL').subscribe( res => {
      if (res) { this.service.ReportsUnWarrantyList = res as ReportsUnWarranty[]; this.dtTrigger.next(); }}, error =>  console.log(error));
  }
  distroyAndReloadTable2(strSearch: string): void {
    if (this.dtElement !==  undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => { dtInstance.destroy(); }).catch(err => console.error(err));
    }
    this.service.refrestUnWarrantyList(this.currentUser.Token, strSearch).subscribe( res => {
    if (res) { this.service.ReportsUnWarrantyList = res as ReportsUnWarranty[]; this.dtTrigger.next(); }}, error =>  console.log(error));
  }

ngAfterViewInit() {
}
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  OpenWarrantyModel(Id: number) {
    this.service.getproductById(this.currentUser.Token, Id).subscribe( res => {
        if (res) { const response = res as any;
          this.ticketService.TicketItem = response.result as TicketItem;
          this.modal.open(this.modalContent2, { size: 'lg' });
        }}, error =>  console.log(error));
  }

  public customwarrantyShowMethor() {
    if (this.ticketService.TicketItem.WarrantyDays === undefined) {
      this.customwarrantyShow = false;
    } else {
    switch (this.ticketService.TicketItem.WarrantyDays.toString()) {
      case '90':
      case '180':
      case '270':
      case '365': this.customwarrantyShow = true; break;
      default: this.customwarrantyShow = false; break;
    }
  }
  }
  numberOnly(event): boolean {
    if (Number(event.target.value) === 0) {
      event.target.value = null;
    }
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  enablewarrantchange() {
    if (this.customwarrantyShowEdit) { this.customwarrantyShowEdit = false; } else { this.customwarrantyShowEdit = true; }
    }
    UpdateItemInstallation() {
      this.isShowSpinner = true;
      this.ticketService.TicketItem.InWarranty = true;
      this.ticketService.TicketItem.WarrantyDays = Number(this.ticketService.TicketItem.WarrantyDays);
      this.ticketService.putTicketItemDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    const des7 = 'A ' + this.currentUser.Product + ' : ' + this.ticketService.TicketItem.ItemName + ', is updated from the ' + this.currentUser.Ticket + ' No ' +
                      this.ticketService.formData.TicketId + ', of Customer : ' + this.ticketService.formData.CustomerName + ', and Uniq No ' +
                      this.ticketService.TicketItem.UniqId + ', Warranty :  ' + this.ticketService.TicketItem.WarrantyDays
                      + ' Days by user ' + this.currentUser.FullName;
                    const Activity7 = 'An ' + this.currentUser.Product + ' : ' + this.ticketService.TicketItem.ItemName + ' Installation Date Update : '
                      + this.ticketService.TicketItem.InstallationDate +
                      ' is updated from the ' + this.currentUser.Ticket + ' No : ' + this.ticketService.formData.TicketId;
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.FullName,
                      this.currentUser.Ticket, this.ticketService.formData.Id, 'Modify', des7, Activity7).subscribe();
                    this.distroyAndReloadTable2('ALL');
                    setTimeout(() => {
                      this.modal.dismissAll();
                      this.isShowSpinner = false;
                    }, 500);
                    }
                   if (response.Message === 'failure') {
                    this.isShowSpinner = false;
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
      }
}
