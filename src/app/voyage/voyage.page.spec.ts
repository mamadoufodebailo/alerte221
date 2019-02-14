import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagePage } from './voyage.page';

describe('VoyagePage', () => {
  let component: VoyagePage;
  let fixture: ComponentFixture<VoyagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
