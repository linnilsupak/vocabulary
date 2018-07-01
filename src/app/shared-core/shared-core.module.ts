import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
  ],
  declarations: [
    MainContentComponent,
  ],
  exports: [
    MainContentComponent,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
  ],
})
export class SharedCoreModule { }
