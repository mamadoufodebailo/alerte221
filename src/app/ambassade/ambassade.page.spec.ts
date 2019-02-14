import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadePage } from './ambassade.page';

describe('AmbassadePage', () => {
  let component: AmbassadePage;
  let fixture: ComponentFixture<AmbassadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbassadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbassadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
