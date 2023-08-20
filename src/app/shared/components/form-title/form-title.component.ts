import { Component } from '@angular/core';

@Component({
  selector: 'app-form-title',
  template:
    '<h2 class="text-[2.2rem] text-gray-800 mb-3 font-bold"><ng-content></ng-content></h2>',
})
export class FormTitleComponent {}
