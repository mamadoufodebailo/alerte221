import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InconnuPage } from './inconnu.page';

describe('InconnuPage', () => {
  let component: InconnuPage;
  let fixture: ComponentFixture<InconnuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InconnuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InconnuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
