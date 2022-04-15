import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService, Login } from 'src/app/services';

@Component({
  selector: 'app-add-templates',
  templateUrl: './add-templates.component.html',
  styles: [],
  providers: [AngularEditorModule]
})
export class AddTemplatesComponent implements OnInit {
  IsTemplateNameValid = true;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['']
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
  };
  currentUser: Login;
  Editable: boolean = false;
  constructor(private route: Router,
    public loginservice: AuthenticationService,
              public notifyService: NotificationService,
              public toastr: ToastrService) {
                this.loginservice.currentUser.subscribe(x => this.currentUser = x);}

  ngOnInit() {
    if (this.route.url === '/settings/notifications/add-template') {
      this.notifyService.SetNotificationTemplateDefault();
      this.Editable = false;
    } else { this.Editable = true; }
  }


  // Email template click
  onEmailTemplateSave() {
    if (this.notifyService.NotificationTemplateData.TemplateName === '') {
      this.IsTemplateNameValid = false;
      return false;
    }
    if (this.notifyService.NotificationTemplateData.Id === '00000000-0000-0000-0000-000000000000') {
      this.AddEmailTemplate();
    } else {
      this.UpdateEmailTemplate();
    }
  }

  // Save email template------/
  AddEmailTemplate() {
    this.notifyService.AddEmailTemplate()
      .subscribe(res => {
        if (res !== 'already exists/conflict') {
          this.toastr.success('', 'Email template created successfully.');
          this.route.navigate(['/settings/notifications/templates']);
        } else {
          this.toastr.warning('', 'Module already exists/conflict!');
        }
      }, error => console.log(error));
  }

  // update email template------/
  UpdateEmailTemplate() {
    this.notifyService.UpdateEmailTemplate()
      .subscribe(res => {
        if (res) {
          this.toastr.success('', 'Email template updated successfully.');
          this.route.navigate(['/settings/notifications/templates']);
        }
      }, error => console.log(error));
  }
  back() {
    this.route.navigate(['/settings/notifications/templates']);
  }
}
