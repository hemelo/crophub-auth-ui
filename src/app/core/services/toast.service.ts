import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private matSnackBar: MatSnackBar) {}

  private readonly disappearTimeout = 3000;

  get baseService() {
    return this.matSnackBar;
  }

  add(message: string) {
    return this.matSnackBar.open(message, undefined, {
      duration: this.disappearTimeout,
    });
  }

  addWithAction(message: string, action: string) {
    return this.matSnackBar.open(message, action, {
      duration: this.disappearTimeout,
    });
  }
}
