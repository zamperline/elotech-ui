import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritimosComponent } from './algoritimos.component';

describe('AlgoritimosComponent', () => {
  let component: AlgoritimosComponent;
  let fixture: ComponentFixture<AlgoritimosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoritimosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoritimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
