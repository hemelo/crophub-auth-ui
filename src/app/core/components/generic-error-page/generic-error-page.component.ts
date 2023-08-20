import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-generic-error-page',
  templateUrl: './generic-error-page.component.html',
})
export class GenericErrorPageComponent {
  constructor(private navigationService: NavigationService) {}

  onBackClick() {
    this.navigationService.navigateBack();
  }
}
