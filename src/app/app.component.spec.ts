import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedCoreModule } from './shared-core/shared-core.module';
import { Router } from '@angular/router';
import { MyVocabModule } from './my-vocab/my-vocab.module';
import { PublicVocabModule } from './public-vocab/public-vocab.module';

describe('AppComponent', () => {
  let fixture;
  let app;
  let router;
  let location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedCoreModule,
        MyVocabModule,
        PublicVocabModule,
        RouterTestingModule.withRoutes(appRoutes),
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    router = TestBed.get(Router)
    location = TestBed.get(Location)
  }));
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('navigate to "" redirect to "/my".', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toEqual('/my');
  }));

  it('naviaget to nonexisting page redirect to "/404-not-found".', fakeAsync(() => {
    router.navigate(['no11']);
    tick();
    expect(location.path()).toEqual('/404-not-found');
  }));
});
