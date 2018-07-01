import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyVocabRoutingModule } from './/my-vocab-routing.module';
import { PrivateVocabularyComponent } from './private-vocabulary/private-vocabulary.component';
import { MyContentComponent } from './my-content/my-content.component';
import { SharedCoreModule } from '../shared-core/shared-core.module';
// import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  imports: [
    CommonModule,
    SharedCoreModule,
    MyVocabRoutingModule,
    // MatSidenavModule
  ],
  declarations: [PrivateVocabularyComponent, MyContentComponent]
})
export class MyVocabModule { }
