import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedCoreModule } from './shared-core/shared-core.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MyVocabModule } from './my-vocab/my-vocab.module';
import { PublicVocabModule } from './public-vocab/public-vocab.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedCoreModule,
    MyVocabModule,
    PublicVocabModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
