import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {delay, map} from 'rxjs/operators';
import {IUser} from './user.model';

@Injectable()
export class DoesUsernameExistsValidator implements AsyncValidator {
  constructor(private authService: AuthService) {
  }

  validate = (c: AbstractControl): Observable<ValidationErrors | null> => {
    return this.authService.getUsers().pipe(
      delay(2000),
      map((users: IUser[]) => {
        const hasUser = users.find(user => user.username === c.value);
        return (hasUser) ? {usernameExists: true} : null;
      }));
  };

}
