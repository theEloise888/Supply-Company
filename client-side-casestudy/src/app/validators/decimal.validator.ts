import { AbstractControl} from '@angular/forms';
import {invalid} from '@angular/compiler/src/render3/view/util';

export function ValidateDecimal(control: AbstractControl): { invalidDecimalFormat: boolean } {
  const DECIMAL_REGEXP = /^[0-9]*(\.[0-9]{0,2})?$/;
  return !DECIMAL_REGEXP.test(control.value) ? {invalidDecimalFormat: true} : null;
}


