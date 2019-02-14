import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgsePage } from './dgse.page';

describe('DgsePage', () => {
  let component: DgsePage;
  let fixture: ComponentFixture<DgsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
