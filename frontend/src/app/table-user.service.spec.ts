import { TestBed } from '@angular/core/testing';

import { TableUserService } from './table-user.service';

describe('TableUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableUserService = TestBed.get(TableUserService);
    expect(service).toBeTruthy();
  });
});
