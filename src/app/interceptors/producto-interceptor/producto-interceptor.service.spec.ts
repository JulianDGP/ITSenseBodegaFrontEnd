import { TestBed } from '@angular/core/testing';

import { ProductoInterceptorService } from './producto-interceptor.service';

describe('ProductoInterceptorService', () => {
  let service: ProductoInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
