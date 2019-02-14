import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrePage } from './ministre.page';

describe('MinistrePage', () => {
  let component: MinistrePage;
  let fixture: ComponentFixture<MinistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
