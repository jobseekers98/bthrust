import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html'
})
export class TestpageComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  model: NgbDateStruct;
  placement = 'bottom';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {

  }

  onsub() {
    this.http.get('https://fsm.bthrust.com/api/GenicProfile/GenicClients/FS002020').toPromise().then(
      res => console.log(res));
  }
}
