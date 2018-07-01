import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/my', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports:[ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
