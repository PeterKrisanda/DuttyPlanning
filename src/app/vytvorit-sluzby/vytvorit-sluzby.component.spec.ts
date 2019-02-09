import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VytvoritSluzbyComponent } from './vytvorit-sluzby.component';

describe('VytvoritSluzbyComponent', () => {
  let component: VytvoritSluzbyComponent;
  let fixture: ComponentFixture<VytvoritSluzbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VytvoritSluzbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VytvoritSluzbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
