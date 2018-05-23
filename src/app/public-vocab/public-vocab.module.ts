import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicVocabRoutingModule } from './public-vocab-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    PublicVocabRoutingModule
  ],
  declarations: [HomeComponent]
})
export class PublicVocabModule { }
