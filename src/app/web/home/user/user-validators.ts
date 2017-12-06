import {FormControl, ValidationErrors} from '@angular/forms';

export class UserValidators {

  static birthYear(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 85;
    const maxYear = currentYear - 18;
    const isValid = !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;
    const message = {
      'years': {
        'message': 'The year must be a valid number between ' + minYear + ' and ' + maxYear
      }
    };
    return isValid ? null : message;
  }

  /*
  static uniqueName(c: FormControl): Promise<ValidationErrors> {
    const message = {
      'uniqueName': {
        'message': 'Dit is geen unieke naam'
      }
    };
// hier find
    console.log('formcontrol: ' + c.value);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(c.value === 'Existing' ? null : null);
      }, 1000);
    });
  }
  */
  static uniqueName(c: FormControl): ValidationErrors {
    const message = {
      'uniqueName': {
        'message': 'Dit is geen unieke naam'
      }
    };
// hier find
    console.log('formcontrol: ' + c.value);
    return c.value === 'Existing' ? message : null;

  }

  static telephoneNumber(c: FormControl): ValidationErrors {
    const isValidPhoneNumber = /^\d{3,3}-\d{3,3}-\d{3,3}$/.test(c.value);
    const message = {
      'telephoneNumber': {
        'message': 'The phone number must be valid (XXX-XXX-XXX, where X is a digit)'
      }
    };
    return isValidPhoneNumber ? null : message;
  }
}
