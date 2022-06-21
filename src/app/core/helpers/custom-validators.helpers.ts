import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

export class CustomValidators {
  public static passwordFormat(control: FormControl) {
    const regExp: RegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()_\-=\[\]{}+.,><?:;'"/|])[a-zA-Z`~!@#$%^&*()_\-\[\]{}=+.,><?:;'"/|\d]{8,}$/;
    return regExp.test(control.value) ? null : { passwordFormat: true };
  }

  public static passwordMatch(password: string, confirmPassword: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }
}
