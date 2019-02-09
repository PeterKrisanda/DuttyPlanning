import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoznamZamestnancovComponent } from './zoznam-zamestnancov.component';

describe('ZoznamZamestnancovComponent', () => {
  let component: ZoznamZamestnancovComponent;
  let fixture: ComponentFixture<ZoznamZamestnancovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoznamZamestnancovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoznamZamestnancovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
