import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconnaissancePage } from './reconnaissance.page';

describe('ReconnaissancePage', () => {
  let component: ReconnaissancePage;
  let fixture: ComponentFixture<ReconnaissancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconnaissancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconnaissancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
