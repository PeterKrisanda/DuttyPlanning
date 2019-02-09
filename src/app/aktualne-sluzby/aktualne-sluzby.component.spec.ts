import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualneSluzbyComponent } from './aktualne-sluzby.component';

describe('AktualneSluzbyComponent', () => {
  let component: AktualneSluzbyComponent;
  let fixture: ComponentFixture<AktualneSluzbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktualneSluzbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktualneSluzbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
