import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecesPage } from './deces.page';

describe('DecesPage', () => {
  let component: DecesPage;
  let fixture: ComponentFixture<DecesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
