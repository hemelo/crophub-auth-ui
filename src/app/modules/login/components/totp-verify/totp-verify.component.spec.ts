import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotpVerifyComponent } from './totp-verify.component';

describe('TotpVerifyComponent', () => {
  let component: TotpVerifyComponent;
  let fixture: ComponentFixture<TotpVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotpVerifyComponent]
    });
    fixture = TestBed.createComponent(TotpVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
