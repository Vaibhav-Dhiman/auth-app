import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
  styles: [ `
      .error {
        background-color : #fff0f0
      }
  `]
})
export class RegisterComponent  {
    form;

    constructor(private fb: FormBuilder, private authservice: AuthService) {
      this.form = fb.group({
        firstName: ['',Validators.required] ,
        lastName: ['',Validators.required] ,
        email: ['', [Validators.required, this.emailValid()]],
        password: ['',Validators.required] ,
        confirmPassword: ['',Validators.required] ,
      }, { validator: this.matchingField('password', 'confirmPassword')})
    }

    register() {
      this.authservice.register(this.form.value);
    }

    isValid(control): any {
      this.matchingField('password', 'confirmPassword');
      return this.form.controls[control].invalid && this.form.controls[control].touched
    }

   matchingField(field1, field2) {
        return form => {
          if (form.controls[field1].value !== form.controls[field2].value)
              { return { mismatched: true} }
        }
    }

    emailValid() {
      return control => {
          var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
          return regex.test(control.value) ? null : { invalidEmail: true }
      }
    }

}
