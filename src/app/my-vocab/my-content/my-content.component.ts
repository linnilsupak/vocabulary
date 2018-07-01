import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { LibraryService } from '../../shared/library.service';
import { Library } from '../../shared/library';

@Component({
  selector: 'v-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.scss']
})
export class MyContentComponent implements OnInit {
  // @ViewChild('drawer') drawer: MatSidenav;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  libraryList$: Observable<Library[]>;
  constructor(private breakpointObserver: BreakpointObserver,
    public libraryService: LibraryService) {
      this.libraryList$ = this.libraryService.getLibraryList$();
      console.log('this.libraryList$',this.libraryList$)
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  // toggle(event: any){
  //   console.log('this.drawer',this.drawer);
  //   this.drawer.toggle()
  // }

}
