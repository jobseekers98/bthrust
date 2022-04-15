import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { QuoteReminder } from 'src/app/services/quote.module';
import { QuoteService } from 'src/app/services/quote.service';
import { ReminderService } from 'src/app/services/reminder.service';
import { TicketService } from 'src/app/services/ticket.service';
import * as EmailValidator from 'email-validator';
import { InvoiceService } from 'src/app/services/invoice.service';
@Component({
    selector: 'generic-reminder-module',
    template: `
                  <div class="kt-portlet kt-portlet--height-fluid kt-widget19">
                    <div class="kt-portlet__head">
                      <div class="kt-portlet__head-label">
                        <h3 class="kt-portlet__head-title">
                        Set Reminder
                        </h3> &nbsp; &nbsp;
                        <label class="kt-checkbox kt-checkbox--solid kt-checkbox--brand" style="margin-top: -12px;">
                        <input type="checkbox" id="addremindercheckbox"
                             (change)="SelectReminder()">
                        <span></span>
                        </label>
                      </div>
                    </div>
                    <div class="row" *ngIf="IsVisibleContract">
                      <div class="kt-portlet__body">
                      <div class="col">
                        <table class="table" *ngIf="data.length > 0">
                            <tr>
                                <th *ngIf="this.ReminderModule === 'ticket'">TicketId</th>
                                <th *ngIf="this.ReminderModule === 'quote'">QuoteId</th>
                                <th *ngIf="this.ReminderModule === 'invoice'">InvoiceId</th>
                                <th>Subject</th><th>Body</th><th>Mail To</th><th>Reminder Date</th><th>Action</th>
                            </tr>
                            <tr *ngFor="let x of data; let i=index; async">
                                <td>{{x.RNo}}</td>
                                <td>{{x.Subject}}</td>
                                <td>{{x.Body}}</td>
                                <td>{{x.MailTo}}</td>
                                <td>{{x.ReminderDate | date:'EEEE, MMMM d, y':'+0000'}}</td>
                                <td><a href="javascript:;" (click)="removeReminder(x.Id, x.RId, this.ReminderModule)"><i class="far fa-trash-alt text-danger"></i></a></td>
                            </tr>
                            <tr><td colspan="6"></td></tr>
                        </table>
                      </div>
                     </div>
                    </div>
                    <div class="row" *ngIf="IsVisibleContract">
                      <div class="kt-portlet__body">
                        <div class="col-md-3">
                          <label>Reminder Type<span class="text-danger">*</span></label>
                          <div class="kt-widget19__wrapper">
                            <select name="country"
                            class="form-control"
                            name="Duration"
                            #Duration="ngModel"
                            [(ngModel)]="reminderservice.QuoteReminder.Duration"
                            (change)="ChangeReminderDuration()"
                            aria-describedby="country-error"
                            aria-invalid="false">
                            <option value="{{0}}">One Time Reminder</option>
                            <option value="{{1}}">Daily Reminder</option>
                            <option value="{{7}}">Weekly Reminder</option>
                            <option value="{{30}}">Monthly Reminder</option>
                            <option value="{{90}}">Quarterly Reminder</option>
                            <option value="{{180}}">Half Yearly Reminder</option>
                        </select>
                          </div>
                        </div>
                        <div class="col-md-2" *ngIf="reminderservice.QuoteReminder.Duration === 0">
                          <label>Reminder Date<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <input type="text" class="form-control" ngbDatepicker (click)="dateReminderDate.toggle()"
                                      style="height: 37px !important;"
                                      [minDate]="minDate"
                                      dateFormat="yyyy-MMM-dd"
                                      #dateReminderDate="ngbDatepicker"
                                      name="reminderservice.QuoteReminder.ReminderDate"
                                      #reminderservice.QuoteReminder.ReminderDate="ngModel"
                                      [(ngModel)]="reminderservice.QuoteReminder.ReminderDate"
                                      placeholder="dd-MM-yyyy" [class.is-invalid]="!isReminderDateValid"/>
                                </div>
                        </div>
                        <div class="col-md-2" *ngIf="reminderservice.QuoteReminder.Duration > 0">
                          <label>Start Date<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <input type="text" class="form-control" ngbDatepicker (click)="dateRecurringStartDate.toggle()"
                                      style="height: 37px !important;"
                                      [minDate]="minDate"
                                      dateFormat="yyyy-MMM-dd"
                                      #dateRecurringStartDate="ngbDatepicker"
                                      name="quoteService.QuoteReminder.RecurringStartDate"
                                      #reminderservice.QuoteReminder.RecurringStartDate="ngModel"
                                      [(ngModel)]="reminderservice.QuoteReminder.RecurringStartDate"
                                      placeholder="dd-MM-yyyy"/>

                              </div>
                        </div>
                        <div class="col-md-1" *ngIf="reminderservice.QuoteReminder.Duration > 0">
                            <label>Frequency<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <input type="text" class="form-control"
                                        style="height: 37px !important;"
                                        name="VisitFrequency"
                                        #VisitFrequency="ngModel"
                                        [(ngModel)]="reminderservice.QuoteReminder.VisitFrequency"
                                        (change)="RecurringTimeCalculator()"/>
                                </div>
                        </div>
                        <div class="col-md-2">
                                <label>&nbsp;</label>
                                <div class="input-group">
                              <a href="javascript:;" class="btn btn-brand"
                                  *ngIf="reminderservice.QuoteReminder.Duration == 7"
                                  data-toggle="modal"
                                  id="remindershowWeekModal"
                                  data-target="#reminderdetailModalWeek">
                                 Set Week Days</a>
                              <a href="javascript:;" class="btn btn-brand"
                                  *ngIf="reminderservice.QuoteReminder.Duration == 30"
                                  data-toggle="modal"
                                  id="remindershowMonthModal"
                                  data-target="#reminderdetailModalMonth">
                                 Set Month Date</a>
                                </div>
                          </div>
                        <div class="col-md-2" *ngIf="reminderservice.QuoteReminder.Duration > 0">
                        <label>skip weekly/Public off</label>
                        <div class="input-group">
                            <span class="kt-switch kt-switch--icon"><label><input
                                (change)="SetSkipOff($event)" [checked]="skippublickholiday"
                                type="checkbox"><span></span></label></span>
                            <span class="swither-bootstrap-learn switcher-customer">
                            </span>
                            </div>
                        </div>
                        <div class="col-md-2" *ngIf="reminderservice.QuoteReminder.Duration > 0">
                            <label>Total Reminder</label>
                            <div class="btooltip5" (click)="clickOntoolTip2()">
                            <i class="fa fa-question-circle text-info" style="cursor: pointer;"></i>
                                <span [ngClass]="this.tooltip2 ? 'btooltiptext5-1':'btooltiptext5'" >
                                    <span *ngFor="let v of recurringList2">
                                        {{v | date}} ({{v | date:'EEEE'}})<br>
                                    </span>
                                </span>
                            </div>
                              <div class="input-group">
                                <label class="form-control" style="background-color: #f7f8fa;" >{{visit_total}} Reminder</label>
                                </div>
                        </div>
                      </div>
                    </div>
                    <div class="row" *ngIf="IsVisibleContract">
                      <div class="kt-portlet__body">
                      <div class="col-md-3">
                        <label>Mail To<span class="text-danger">*</span></label>&nbsp;
                        <div class="btooltip1"> <i
                            class="fa fa-question-circle text-info"
                            style="cursor: help;"></i>
                        <span class="btooltip1text">Can send up to 5 emails, separated by comma</span>
                    </div>
                        <div class="input-group">
                          <input type="text" class="form-control"
                                style="height: 37px !important;"
                                name="reminderservice.QuoteReminder.MailTo"
                                #reminderservice.QuoteReminder.MailTo="ngModel"
                                [(ngModel)]="reminderservice.QuoteReminder.MailTo"
                                placeholder="someone@domain.com" [class.is-invalid]="!isMailValid"/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <label>Subject<span class="text-danger">*</span></label>
                        <div class="input-group">
                          <input type="text" class="form-control"
                                style="height: 37px !important;"
                                name="reminderservice.QuoteReminder.Subject"
                                #reminderservice.QuoteReminder.Subject="ngModel"
                                [(ngModel)]="reminderservice.QuoteReminder.Subject"
                                placeholder="Subject" [class.is-invalid]="!isSubjectValid"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <label>Body<span class="text-danger">*</span></label>
                        <div class="input-group">
                          <textarea class="form-control"  name="reminderservice.QuoteReminder.Body"
                          #reminderservice.QuoteReminder.Body="ngModel"
                          [(ngModel)]="reminderservice.QuoteReminder.Body" rows="1"
                          placeholder="Body" [class.is-invalid]="!isBodyValid"></textarea>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <label>&nbsp;</label>
                        <div class="form-group">
                          <a href="javascript:;" *ngIf="!this.loading"
                          (click)="onSubmit()"
                              class="btn btn-brand btn-sm">
                            Add Reminder 
                          </a>
                          <a href="javascript:;" *ngIf="this.loading"
                              class="btn btn-brand btn-sm">
                              <i class="fa fa-spinner fa-spin"></i>
                          </a>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="modal fade" id="reminderdetailModalWeek">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form>
                <div class="modal-header">
                    <h4 class="modal-title">{{service.formData.TicketId}}</h4>
                    <button type="button" class="close" id="reminderdetailModalWeekbutton" data-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="detail-inner">
                        <div class="details-tabs">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#dtab1">WEEK</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="dtab1" class="tab-pane active">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12">
                                            <div class="ticket-month">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Sun</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="SundayIsActive" #SundayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.SundayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Mon</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="MondayIsActive" #MondayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.MondayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Tue</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="TuesdayIsActive"
                                                                        #TuesdayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.TuesdayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Wed</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="WednesdayIsActive"
                                                                        #WednesdayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.WednesdayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Thu</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="ThursdayIsActive"
                                                                        #ThursdayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.ThursdayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Fri</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="FridayIsActive" #FridayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.FridayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Sat</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="SaturdayIsActive"
                                                                        #SaturdayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.SaturdayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <button type="button" (click)="TicketRecurringHelper(1)"
                                            class="btn btn-secondary">Changes Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
                  <div class="modal fade" id="reminderdetailModalMonth">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form>
                <div class="modal-header">
                    <h4 class="modal-title">{{service.formData.TicketId}}</h4>
                    <button type="button" class="close" id="reminderdetailModalMonthbutton" data-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="detail-inner">
                        <div class="details-tabs">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#dtab2">MONTH</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="dtab2" class="tab-pane active">
                                    <div class="row tickt-month-parent">
                                        <div class="col-md-12 col-sm-12">
                                            <div class="ticket-month">

                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>1</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date1" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date1">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>2</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date2" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date2">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>3</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date3" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date3">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>4</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date4" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date4">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>5</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date5" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date5">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>6</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date6" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date6">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>7</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date7" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date7">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>8</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date8" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date8">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>9</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date9" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date9">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>10</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date10" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date10">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>11</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date11" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date11">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>12</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date12" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date12">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>13</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date13" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date13">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>14</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date14" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date14">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>15</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date15" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date15">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>16</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date16" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date16">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>17</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date17" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date17">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>18</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date18" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date18">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>19</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date19" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date19">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>20</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date20" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date20">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>21</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date21" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date21">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>22</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date22" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date22">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>23</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date13" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date23">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>24</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date24" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date24">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>25</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date25" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date25">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>26</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date26" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date26">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>27</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date27" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date27">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>28</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date28" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date28">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>29</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date29" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date29">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>30</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date30" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date30">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>31</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date31" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date31">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <button type="button" (click)="TicketRecurringHelper(2)"
                                            class="btn btn-secondary">Changes Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
  `,
    styles: [`
    #reminderdetailModalMonth .modal-header{padding: 0.65rem;}
    #reminderdetailModalMonth .modal-content{background-clip: content-box;border:none;}
    #reminderdetailModalMonth .modal-content .nav-tabs .nav-item .nav-link{background: #0191d2;color:white;}
    .tickt-month-parent{padding:10px;}
    .container-check {display: block;position: relative;padding-left:20px;margin-bottom: 12px;cursor: pointer;font-size: 22px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}
    .container-check input {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}
    .checkmark {position: absolute;top: 0;left: 0;height:100%;width:100%;background-color: #0082c830;}
    .container-check:hover input ~ .checkmark {background-color: #ccc;}
    .container-check input:checked ~ .checkmark {background-color: #2196F3;border-bottom: 5px solid #1C5B8C;}
    .checkmark:after {content: "";position: absolute;display: none; padding-right: 3px;}
    .container-check input:checked ~ .checkmark:after {display: block;}
    .container-check p{ margin: 0;position: relative;display: inline-block;z-index: 1000;font-size:24px;color:black;}
    #reminderdetailModalWeek .btn{background-color:#2C77F4;color:white}
    #reminderdetailModalWeek .modal-header{padding: 0.65rem;}
    #reminderdetailModalWeek .modal-content{background-clip: content-box;border:none;}
    #reminderdetailModalWeek .modal-content .nav-tabs .nav-item .nav-link{background: #0191d2;color:white;}
    .table th .table td {padding: 10px !important;}
    `]
})
export class ReminderModuleComponent implements OnInit {
    @Input() Id: string;
    @Input() Token: string;
    @Input() ReminderModule: string;
    IsVisibleContract: boolean;
    currentUTCDate = new Date();
    visit_total: number;
    data: any;
    loading: boolean;
    isValid: boolean;
    isReminderDateValid: boolean;
    isMailValid: boolean;
    isSubjectValid: boolean;
    isBodyValid: boolean;
    minDate = { year: Number(this.currentUTCDate.getFullYear()), month: Number(this.currentUTCDate.getMonth() + 1), day: Number(this.currentUTCDate.getDate()) };
    skippublickholiday: boolean = true;
    recurringList2: any = [];
    tooltip2: boolean = false;
    constructor(
        public service: TicketService,
        public quoteservice: QuoteService,
        public invoiceservice: InvoiceService,
        public reminderservice: ReminderService,
        private toastr: ToastrService,
        public genicservice: GenicProfileService
    ) {
        this.reminderservice.QuoteReminder = new QuoteReminder();
        this.reminderservice.QuoteReminderList = [];
        this.IsVisibleContract = false;
        this.visit_total = 0;
        this.loading = false;
        this.isValid = true;
        this.isReminderDateValid = true;
        this.isMailValid = true;
        this.isSubjectValid = true;
        this.isBodyValid = true;
    }
    ngOnInit() {
        this.InitiateObject();
        this.reminderservice.getReminder(this.Token, this.Id, this.ReminderModule).subscribe(res => {
            if (res) {
                const response = res as any;
                if (response.Message === 'success') {
                    this.data = [];
                    this.data = response.result;
                    this.reminderservice.TicketReminder.MailTo = this.service.formData.CustomerEmail;
                    this.reminderservice.QuoteReminder.MailTo = this.quoteservice.QuoteData.CustomerEmail;
                    this.reminderservice.InvoiceReminder.MailTo = this.invoiceservice.QuoteData.CustomerEmail;
                    if (this.data.length > 0) {
                        this.IsVisibleContract = true;
                        let checkbox1 = null;
                        checkbox1 = document.querySelector('#addremindercheckbox');
                        checkbox1.checked = true;
                    }
                }
            }
        }, error => console.log(error));
    }
    public SelectReminder() {
        if (this.IsVisibleContract) {
            return this.IsVisibleContract = false;
        } else {
            switch (this.ReminderModule) {
                case 'quote': this.reminderservice.QuoteReminder.MailTo = this.quoteservice.QuoteData.CustomerEmail; break;
                case 'invoice': this.reminderservice.QuoteReminder.MailTo = this.invoiceservice.InvoiceData.CustomerEmail; break;
                case 'ticket': this.reminderservice.QuoteReminder.MailTo = this.service.formData.CustomerEmail; break;
                case 'warranty': this.reminderservice.QuoteReminder.MailTo = this.service.formData.CustomerEmail; break;
            }
            return this.IsVisibleContract = true;
        }
    }
    public ChangeReminderDuration() {
        this.reminderservice.QuoteReminder.Duration = Number(this.reminderservice.QuoteReminder.Duration);
        if (this.reminderservice.QuoteReminder.Duration === 7) {
            this.reminderservice.QuoteReminder.VisitFrequency = 1;
        }
        if (this.reminderservice.QuoteReminder.Duration === 30) {
            this.reminderservice.QuoteReminder.VisitFrequency = 1;
        }
        let todaydate = this.genicservice.TODAY_DATE_IN_STRING + 'T00:00:00Z';
        this.reminderservice.QuoteReminder.ReminderDate = '';
        this.reminderservice.QuoteReminder.RecurringStartDate = '';
        this.reminderservice.QuoteReminder.RecurringEndDate = '';
        this.reminderservice.QuoteReminder.ReminderDate = todaydate;
        this.reminderservice.QuoteReminder.RecurringStartDate = todaydate;
        this.reminderservice.QuoteReminder.RecurringEndDate = todaydate;
    }
    public RecurringTimeCalculator() {
        let numdays = 0;
        let visitfruq = 0;
        let totalVisit = 0;
        const now = new Date(this.reminderservice.QuoteReminder.RecurringStartDate);
        numdays = Number(this.reminderservice.QuoteReminder.Duration);
        visitfruq = this.reminderservice.QuoteReminder.VisitFrequency;
        switch (Number(this.reminderservice.QuoteReminder.Duration)) {
            case 0:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                break;
            case 1:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                setTimeout(() => { this.TicketRecurringHelper(0); }, 500);
                break;
            case 7:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                setTimeout(() => { let el1: HTMLElement = document.getElementById('remindershowWeekModal') as HTMLElement; el1.click(); }, 500);
                break;
            case 30:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                setTimeout(() => { let el2: HTMLElement = document.getElementById('remindershowMonthModal') as HTMLElement; el2.click(); }, 500);
                break;
            case 90:
                this.visit_total = totalVisit = visitfruq;
                this.reminderservice.QuoteReminder.VisitFrequency = visitfruq;
                setTimeout(() => { this.TicketRecurringHelper(3); }, 500);
                break;
            case 180:
                this.visit_total = totalVisit = visitfruq;
                this.reminderservice.QuoteReminder.VisitFrequency = visitfruq;
                setTimeout(() => { this.TicketRecurringHelper(4); }, 500);
                break;
        }
        numdays = 0;
        visitfruq = 0;
        totalVisit = 0;
    }
    onSubmit() {
        if (this.validateForm()) {
            this.reminderservice.QuoteReminder.Id = 0;
            this.reminderservice.QuoteReminder.QuoteId = this.Id;
            this.reminderservice.QuoteReminder.IsActive = true;
            this.reminderservice.QuoteReminder.Duration = Number(this.reminderservice.QuoteReminder.Duration);
            this.reminderservice.QuoteReminder.VisitFrequency = Number(this.reminderservice.QuoteReminder.VisitFrequency);
            if (this.reminderservice.QuoteReminder.Duration === 0) {
                this.reminderservice.QuoteReminder.ReminderDate = this.reminderservice.QuoteReminder.ReminderDate;
                this.reminderservice.QuoteReminder.RecurringStartDate = null;
                this.reminderservice.QuoteReminder.RecurringEndDate = null;
            }
            this.loading = true;
            this.reminderservice.postQuoteReminder(this.Token, this.ReminderModule).subscribe(res => {
                if (res) {
                    const response = res as any;
                    if (response.Message === 'success') {
                        this.toastr.success(response.MessageDescription);
                        this.data = [];
                        this.data = response.result;
                        this.loading = false;
                        this.InitiateObject();
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning(response.MessageDescription);
                        this.loading = false;
                    }
                }
            }, error => console.log(error));
        }
    }
    removeReminder(rid: number, QuoteId: string, type: string) {
        this.reminderservice.removeQuoteReminder(this.Token, rid, QuoteId, type).subscribe(res => {
            if (res) {
                const response = res as any;
                if (response.Message === 'success') {
                    this.toastr.success(response.MessageDescription);
                    this.data = [];
                    this.data = response.result;
                }
                if (response.Message === 'failure') {
                    this.toastr.warning(response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    TicketRecurringHelper(type: number) {
        if (this.Id === '00000000-0000-0000-0000-000000000000') { return false; }
        this.service.TicketRecurringHelper.Id = 0;
        this.service.TicketRecurringHelper.Type = type;
        this.service.TicketRecurringHelper.IsFor = 2; /// For Reminder Type
        this.service.TicketRecurringHelper.RecurringStartDate = this.reminderservice.QuoteReminder.RecurringStartDate;
        this.service.TicketRecurringHelper.RecurringDuration = Number(this.reminderservice.QuoteReminder.Duration);
        this.service.TicketRecurringHelper.RecurringVisitFrequency = Number(this.reminderservice.QuoteReminder.VisitFrequency);
        this.service.putTicketRecurringHelperDetails(this.Token, this.skippublickholiday).subscribe(res => {
            if (res) {
                const response = res as any;
                if (response.Message === 'success') {
                    this.visit_total = response.result.Count;
                    this.recurringList2 = response.result.List;
                    //this.service.formData.RecurringStartDate = response.result.FirstVisit;
                    //this.service.formData.RecurringEndDate = response.result.LastVisit;
                    let demoClasses = null;
                    demoClasses = document.querySelector('#reminderdetailModalWeekbutton');
                    demoClasses.click();
                    let demoClasses2 = null;
                    demoClasses2 = document.querySelector('#reminderdetailModalMonthbutton');
                    demoClasses2.click();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    validateForm() {
        if (this.reminderservice.QuoteReminder.Duration === undefined || this.reminderservice.QuoteReminder.Duration === null) { this.reminderservice.QuoteReminder.Duration = 0 }
        if (this.reminderservice.QuoteReminder.VisitFrequency === undefined || this.reminderservice.QuoteReminder.VisitFrequency === null) { this.reminderservice.QuoteReminder.VisitFrequency = 1 }
        this.isValid = true;
        this.isReminderDateValid = true;
        if (this.reminderservice.QuoteReminder.ReminderDate === null || this.reminderservice.QuoteReminder.ReminderDate === undefined ||
            this.reminderservice.QuoteReminder.ReminderDate === '') {
            this.isReminderDateValid = false;
            this.isValid = false;
            this.toastr.warning('warning', 'Please select reminder date!');
        }
        this.isMailValid = true;
        if (this.reminderservice.QuoteReminder.MailTo === null || this.reminderservice.QuoteReminder.MailTo === undefined ||
            this.reminderservice.QuoteReminder.MailTo === '') {
            this.isMailValid = false;
            this.isValid = false;
            this.toastr.warning('Please enter mail address!');
        }
        let arrEmail = this.reminderservice.QuoteReminder.MailTo.split(',');
        if (arrEmail.length > 5) {
            this.isMailValid = false;
            this.isValid = false;
            this.toastr.warning('Can send up to 5 emails, separated by comma');
            this.toastr.error('current length is ' + arrEmail.length);
        }
        arrEmail.forEach(element => {
            if (!EmailValidator.validate(element)) {
                this.toastr.warning('Warning', 'Please enter a valid email');
                this.toastr.error(element + ' Invalid email');
                this.isMailValid = false;
                this.isValid = false;
                return false;
            }
        });
        this.isSubjectValid = true;
        if (this.reminderservice.QuoteReminder.Subject === null || this.reminderservice.QuoteReminder.Subject === undefined ||
            this.reminderservice.QuoteReminder.Subject === '') {
            this.isSubjectValid = false;
            this.isValid = false;
            this.toastr.warning('warning', 'Please enter mail subject!');
        }
        this.isBodyValid = true;
        if (this.reminderservice.QuoteReminder.Body === null || this.reminderservice.QuoteReminder.Body === undefined ||
            this.reminderservice.QuoteReminder.Body === '') {
            this.isBodyValid = false;
            this.isValid = false;
            this.toastr.warning('warning', 'Please enter mail subject!');
        }
        return this.isValid;
    }
    InitiateObject() {
        let todaydate = this.genicservice.TODAY_DATE_IN_STRING + 'T00:00:00Z';
        this.reminderservice.QuoteReminder = new QuoteReminder();
        this.reminderservice.QuoteReminder.Id = 0;
        this.reminderservice.QuoteReminder.QuoteId = this.Id;
        this.reminderservice.QuoteReminder.Subject = '';
        this.reminderservice.QuoteReminder.MailTo = '';
        this.reminderservice.QuoteReminder.Body = '';
        this.reminderservice.QuoteReminder.Duration = 0;
        this.reminderservice.QuoteReminder.VisitFrequency = 1;
        this.reminderservice.QuoteReminder.ReminderDate = todaydate;
        this.reminderservice.QuoteReminder.RecurringStartDate = todaydate;
        this.reminderservice.QuoteReminder.RecurringEndDate = todaydate;
        this.reminderservice.QuoteReminder.IsActive = true;
    }
    SetSkipOff(e) {
        const enb = Boolean(e.target.checked);
        if(enb){
          this.skippublickholiday = true;
        } else {
          this.skippublickholiday = false;
        }
      }
    clickOntoolTip2() {
    if(this.tooltip2) {
        this.tooltip2 = false;
    } else {
        this.tooltip2 = true;
    }
  }
}
