import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateVocabularyComponent } from './private-vocabulary.component';

describe('PrivateVocabularyComponent', () => {
  let component: PrivateVocabularyComponent;
  let fixture: ComponentFixture<PrivateVocabularyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateVocabularyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
