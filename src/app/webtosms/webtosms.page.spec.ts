import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtosmsPage } from './webtosms.page';

describe('WebtosmsPage', () => {
  let component: WebtosmsPage;
  let fixture: ComponentFixture<WebtosmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebtosmsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtosmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
