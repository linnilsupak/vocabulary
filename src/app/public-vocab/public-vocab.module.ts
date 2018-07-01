import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicVocabRoutingModule } from './public-vocab-routing.module';
import { HomeComponent } from './home/home.component';
import { PublicContentComponent } from './public-content/public-content.component';
import { SharedCoreModule } from '../shared-core/shared-core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedCoreModule,
    PublicVocabRoutingModule
  ],
  declarations: [HomeComponent, PublicContentComponent]
})
export class PublicVocabModule { }
