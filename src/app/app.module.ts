import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MenuTemplateComponent } from './menu-template/menu-template.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { MyVocabModule } from './my-vocab/my-vocab.module';
import { PublicVocabModule } from './public-vocab/public-vocab.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MyVocabModule,
    AppRoutingModule,
    PublicVocabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
