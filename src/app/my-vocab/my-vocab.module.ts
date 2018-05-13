import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyVocabRoutingModule } from './/my-vocab-routing.module';
import { PrivateVocabularyComponent } from './private-vocabulary/private-vocabulary.component';

@NgModule({
  imports: [
    CommonModule,
    MyVocabRoutingModule
  ],
  declarations: [PrivateVocabularyComponent]
})
export class MyVocabModule { }
