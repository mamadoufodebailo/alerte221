import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaissancePage } from './naissance.page';

describe('NaissancePage', () => {
  let component: NaissancePage;
  let fixture: ComponentFixture<NaissancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaissancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaissancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
