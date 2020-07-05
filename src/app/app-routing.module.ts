import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthTabsComponent } from './components/auth-tabs/auth-tabs.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ChangePasswaordComponent } from './components/change-passwaord/change-passwaord.component';
// routes for changing the control to other component
const routes: Routes = [
  {
    path: '',
    component: AuthTabsComponent,
  },

  {
    path: 'forget',
    component: ForgetPasswordComponent,
  },
  {
    path: 'changePassword',
    component: ChangePasswaordComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
