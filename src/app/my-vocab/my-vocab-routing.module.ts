import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateVocabularyComponent } from './private-vocabulary/private-vocabulary.component';

const routes: Routes = [
  { path: 'my', component: PrivateVocabularyComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes), ],
  exports:[ RouterModule ],
  declarations: []
})
export class MyVocabRoutingModule { }
