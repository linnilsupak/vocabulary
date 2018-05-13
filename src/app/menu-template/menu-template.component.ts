import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MyLibraryService } from '../shared/my-library.service';

@Component({
  selector: 'menu-template',
  templateUrl: './menu-template.component.html',
  styleUrls: ['./menu-template.component.css']
})
export class MenuTemplateComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver,
  public myLibrary: MyLibraryService) {

  }
}
