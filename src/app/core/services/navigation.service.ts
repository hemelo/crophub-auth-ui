import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private router: Router,
    private location: Location
  ) {}

  get baseService() {
    return this.router;
  }

  navigate(commands: any[], extras?: NavigationExtras) {
    return this.router.navigate(commands, extras);
  }

  navigateByUrl(url: string, extras?: NavigationExtras) {
    return this.router.navigateByUrl(url, extras);
  }

  navigateBack() {
    return this.location.back();
  }

  navigateForward() {
    return this.location.forward();
  }

  navigateBackWithWindowApi(steps: number = 1) {
    return window.history.go(-steps);
  }

  navigateForwardWithWindowApi(steps: number = 1) {
    return window.history.go(steps);
  }

  genericErrorPage() {
    return this.navigate(['/error']);
  }
}
