import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = [];
  constructor() {}
    ngOnInit() {}
  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }
}

