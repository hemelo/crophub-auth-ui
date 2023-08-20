import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericErrorPageComponent } from './core/components/generic-error-page/generic-error-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../app/modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('../app/modules/password/password.module').then(
        (m) => m.PasswordModule
      ),
  },
  {
    path: 'error',
    component: GenericErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
