import { TestBed } from '@angular/core/testing';

import { NgxHotTableService } from './ngx-hot-table.service';

describe('NgxHotTableService', () => {
  let service: NgxHotTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHotTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
