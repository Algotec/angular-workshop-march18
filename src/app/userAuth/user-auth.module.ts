import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  providers: [AuthGuard, AuthService],
  declarations: [LoginComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [LoginComponent],
})
export class UserAuthModule {
}
