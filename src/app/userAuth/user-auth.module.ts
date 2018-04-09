import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {UserRegistrationComponent} from './registeration.component';
import {RegistrationContainerComponent} from './registration-container.component';
import {DoesUsernameExistsValidator} from './doesUsernameExistsValidator';
import {UIWebkitFormsModule} from '@algotec/ui-elements-webkit';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationContainerComponent}

];

@NgModule({
  providers: [AuthGuard, AuthService, DoesUsernameExistsValidator],
  declarations: [LoginComponent, UserRegistrationComponent, RegistrationContainerComponent],
  imports: [SharedModule, UIWebkitFormsModule, RouterModule.forChild(routes)],
  exports: [LoginComponent],
})
export class UserAuthModule {
}
