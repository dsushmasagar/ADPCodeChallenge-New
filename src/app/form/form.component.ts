import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';
import { Form } from './form';


function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  };
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  reactForm: FormGroup;
  form = new Form();
  emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  get addresses(): FormArray {
    return <FormArray>this.reactForm.get('addresses');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      phone: '',
      notification: 'email',
      rating: [null, ratingRange(1, 5)],
      addresses: this.fb.array([this.buildAddress()])
    });

    this.reactForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    );

    const emailControl = this.reactForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      street1: ['', Validators.required],
      zip: ''
    });
  }

  populateTestData(): void {
    this.reactForm.patchValue({
      firstName: 'Sushma',
      lastName: 'Deshetti',
      emailGroup: { email: 'dsushma.sagar@gmail.com', confirmEmail: 'dsushma.sagar@gmail.com' }
    });
    const addressGroup = this.fb.group({
      street1: 'Edgemooretrace',
      zip: ''
    });
    this.reactForm.setControl('addresses', this.fb.array([addressGroup]));
  }

  save() {
    console.log(this.reactForm);
    console.log('Saved: ' + JSON.stringify(this.reactForm.value));
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    console.log(this.validationMessages);
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.emailMessage += this.validationMessages[key]).join(' ');
    }
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.reactForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

}
