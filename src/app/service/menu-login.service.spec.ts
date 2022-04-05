import { TestBed } from '@angular/core/testing';

import { MenuLoginService } from './menu-login.service';

describe('MenuLoginService', () => {
  let service: MenuLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
