import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicContentComponent } from './public-content/public-content.component';

const routes: Routes = [
  {
    path: 'home', component: PublicContentComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PublicVocabRoutingModule { }
