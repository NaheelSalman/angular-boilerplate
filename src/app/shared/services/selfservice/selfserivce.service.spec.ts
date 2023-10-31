import { TestBed } from '@angular/core/testing';

import { SelfSerivce } from './selfserivce.service';

describe('SelfSerivce', () => {
  let service: SelfSerivce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfSerivce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
