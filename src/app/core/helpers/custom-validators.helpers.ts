import { FormControl } from '@angular/forms';

export class CustomValidators {
  public static password(control: FormControl) {
    const regExp: RegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()_\-=\[\]{}+.,><?:;'"/|])[a-zA-Z`~!@#$%^&*()_\-\[\]{}=+.,><?:;'"/|\d]{8,}$/;
    return regExp.test(control.value) ? null : { password: true };
  }
}
