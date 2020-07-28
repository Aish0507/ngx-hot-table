import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHotTableComponent } from './ngx-hot-table.component';

describe('NgxHotTableComponent', () => {
  let component: NgxHotTableComponent;
  let fixture: ComponentFixture<NgxHotTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxHotTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
