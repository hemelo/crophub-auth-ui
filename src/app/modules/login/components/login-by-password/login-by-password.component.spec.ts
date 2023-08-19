import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginByPasswordComponent } from './login-by-password.component';

describe('LoginByPasswordComponent', () => {
  let component: LoginByPasswordComponent;
  let fixture: ComponentFixture<LoginByPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginByPasswordComponent],
    });
    fixture = TestBed.createComponent(LoginByPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
