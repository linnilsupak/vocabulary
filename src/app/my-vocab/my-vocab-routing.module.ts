import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateVocabularyComponent } from './private-vocabulary/private-vocabulary.component';
import { MyContentComponent } from './my-content/my-content.component';

const routes: Routes = [
  {
    path: 'my', component: MyContentComponent,
    children: [
      { path: '', pathMatch: 'full', component: PrivateVocabularyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
  declarations: []
})
export class MyVocabRoutingModule { }
