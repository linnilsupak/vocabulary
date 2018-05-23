import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuTemplateService {
  sideNavList$: Observable<string[]>;
  // tittle: string;

  constructor() {

  }

  // setSideNavList(_sideNavList$: Observable<string[]>) {
  //   this.sideNavList$ = _sideNavList$;
  // }

}
