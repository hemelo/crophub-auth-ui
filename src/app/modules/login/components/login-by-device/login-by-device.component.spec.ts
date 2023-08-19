import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginByDeviceComponent } from './login-by-device.component';

describe('LoginByDeviceComponent', () => {
  let component: LoginByDeviceComponent;
  let fixture: ComponentFixture<LoginByDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginByDeviceComponent]
    });
    fixture = TestBed.createComponent(LoginByDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
