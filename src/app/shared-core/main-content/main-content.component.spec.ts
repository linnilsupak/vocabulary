import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from './main-content.component';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainContentComponent],
      imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click menu icon toggle sidenav if exist.', () => {

  });

  it('activate side-nav should show menu icon.', () => {

  });

  it('deactivate side-nav should hide menu icon.', () => {

  });

});
