import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationDetailPage } from './association-detail.page';

describe('AssociationDetailPage', () => {
  let component: AssociationDetailPage;
  let fixture: ComponentFixture<AssociationDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
