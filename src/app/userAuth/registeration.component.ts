import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {userFieldsValidationSchema} from './user.model';
import {EqualValidator} from '../shared/validateEqual.directive';
import {DoesUsernameExistsValidator} from './doesUsernameExistsValidator';
import {getUserDetailsForm} from './userdetails.form.data';
import {IUIElementObj} from '@algotec/wmdl-webkit';

function matchEqualValidator(originKey: string, matchingKey: string) {
  return function (controlGroup: FormControl) {
    const originControl = controlGroup.get(originKey);
    const matchingControl = controlGroup.get(matchingKey);
    const valueEquals = originControl.value === matchingControl.value;
    const errors = matchingControl.errors || {};
    if (valueEquals) {
      if (errors['matchingEquals']) {
        delete errors['matchingEquals'];
        if (Object.keys(errors).length === 0) {
          matchingControl.setErrors(null);
        }
      }
    } else {
      errors['matchingEquals'] = true;
      matchingControl.setErrors(errors);
    }
    return null;

  };
}

@Component({
  selector: 'user-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <alg-form [uiModel]="formModel$|async" *toolID="let formModel$ create userDeatilsForm;depth:10"></alg-form>
    <!--<form novalidate [formGroup]="userForm" (ngSubmit)="handleSubmit()">-->
      <!--<mat-card>-->
        <!--<mat-card-title>{{title}}</mat-card-title>-->
        <!--<mat-card-content>-->
          <!--<mat-form-field>-->
            <!--<input matInput formControlName='username' placeholder="Username"/>-->
            <!--<mat-hint *ngIf="userForm.get('username')?.pending">Username is being checked....</mat-hint>-->
            <!--<mat-error *ngIf="hasError('username','required')">Username is required</mat-error>-->
            <!--<mat-error *ngIf="hasError('username','usernameExists')">Username already exists</mat-error>-->
          <!--</mat-form-field>-->
          <!--<mat-form-field>-->
            <!--<input matInput type="password" formControlName='password' placeholder="Password"/>-->
            <!--<mat-error *ngIf="hasError('password','required')">Password is required</mat-error>-->
            <!--<mat-error *ngIf="hasError('password','minlength')">Password of Minimum length 5 characters is required</mat-error>-->
          <!--</mat-form-field>-->
          <!--<ng-container *ngIf="!loginOnly">-->
            <!--<mat-form-field>-->
              <!--<input matInput type="password" formControlName="repeat_password" placeholder="Retype Password"/>-->
              <!--<mat-error *ngIf="hasError('repeat_password','minlength')">Password of Minimum length 5 characters is required</mat-error>-->
              <!--<mat-error *ngIf="hasError('repeat_password','validateEqual')">Passwords do not match</mat-error>-->
            <!--</mat-form-field>-->
            <!--<mat-divider></mat-divider>-->
            <!--<div formGroupName="address">-->
              <!--<h3>Address</h3>-->
              <!--<mat-form-field>-->
                <!--<input matInput formControlName="street" placeholder="Street"/>-->
                <!--<mat-error *ngIf="hasError('address.street','required')">Street address is required</mat-error>-->
              <!--</mat-form-field>-->
              <!--<mat-form-field>-->
                <!--<mat-error *ngIf="hasError('address.city','required')">City is required</mat-error>-->
                <!--<input matInput formControlName="city" placeholder="City"/>-->
              <!--</mat-form-field>-->
              <!--<mat-form-field>-->
                <!--<input matInput formControlName="zip" placeholder="zip"/>-->
                <!--<mat-error *ngIf="hasError('address.zip','required')">Zip is required</mat-error>-->
                <!--<mat-hint align="start" *ngIf="hasError('address.zip','pattern')">Must Be 5-7 digits only</mat-hint>-->
              <!--</mat-form-field>-->
            <!--</div>-->
          <!--</ng-container>-->
        <!--</mat-card-content>-->
        <!--<mat-card-actions align="end">-->
          <!--<button mat-raised-button color="primary" type="submit">SUBMIT</button>-->
        <!--</mat-card-actions>-->
      <!--</mat-card>-->
    <!--</form>-->
  `
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup;
  public userDeatilsForm: IUIElementObj;

  constructor(public fb: FormBuilder, private doesUsernameExistsValidator: DoesUsernameExistsValidator) {
  }

  private initialFieldsDescriptor = {
    username: ['', userFieldsValidationSchema.username],
    password: ['', userFieldsValidationSchema.password],
  };


  @Input() title: string;
  @Input() loginOnly = false;
  @Output() formSubmit = new EventEmitter();

  ngOnInit() {
    this.userDeatilsForm = getUserDetailsForm(this.loginOnly);
  //   this.userForm = this.fb.group((this.loginOnly) ? this.initialFieldsDescriptor : {
  //     username: ['', userFieldsValidationSchema.username, [this.doesUsernameExistsValidator.validate]],
  //     password: ['', userFieldsValidationSchema.password.concat([EqualValidator.validator('repeat_password', true)])],
  //     repeat_password: ['', userFieldsValidationSchema.repeat_password.concat([EqualValidator.validator('password')])],
  //     address: this.fb.group({
  //       street: ['', userFieldsValidationSchema.address_street],
  //       city: ['', userFieldsValidationSchema.address_city],
  //       zip: ['', userFieldsValidationSchema.address_zip]
  //     })
  //   });
  }

  hasError(controlPath: string, errorName: string) {
    return this.userForm.get(controlPath).touched && this.userForm.get(controlPath).hasError(errorName);
  }


  isInvalid(controlPath) {
    const control = this.userForm.get(controlPath);
    return control.touched && control.status === 'INVALID';
  }

  handleSubmit() {
    if (this.userForm.valid) {
      this.formSubmit.emit(this.userForm.value);
    }
  }
}
