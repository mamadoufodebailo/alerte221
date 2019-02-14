import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapierPage } from './papier.page';

describe('PapierPage', () => {
  let component: PapierPage;
  let fixture: ComponentFixture<PapierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
