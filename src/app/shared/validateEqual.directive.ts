import {Input, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: forwardRef(() =>
        EqualValidator), multi: true
    }
  ]
})
export class EqualValidator implements Validator {
  @Input() public validateEqual: string;
  @Input() public reverse: string;

  static validator(otherKey: string, isReverse = false) {
    const validator = new EqualValidator();
    validator.validateEqual = otherKey;
    validator.reverse = isReverse.toString();
    return validator.validate.bind(validator);

  }

  private get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true' ? true : false;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    const v = c.value;
    // control value
    const e = c.root.get(this.validateEqual);
    // value not equal
    if (e && v !== e.value && !this.isReverse) {
      return {
        validateEqual: true
      };
    }
    // value equal and reverse
    if (e && v === e.value && this.isReverse) {
      delete e.errors['validateEqual'];
      if (!Object.keys(e.errors).length) {
        e.setErrors(null);
      }
    }
    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({validateEqual: true});
    }
    return null;
  }
}
