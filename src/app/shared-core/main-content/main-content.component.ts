import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';


@Component({
  selector: 'v-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input() isMenuActivate: boolean;
  @Output() toggleSideNave = new EventEmitter<any>();
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  
  constructor(private breakpointObserver: BreakpointObserver) {
    if (!this.isMenuActivate) {
      this.isMenuActivate=false;
    }
  }

  ngOnInit() {
  }

  toggle(){
    this.toggleSideNave.emit(null);
  }
}
