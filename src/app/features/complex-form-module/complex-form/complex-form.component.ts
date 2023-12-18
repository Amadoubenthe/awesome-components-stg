import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, map, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss'],
})
export class ComplexFormComponent {
  mainForm!: FormGroup;
  personalInfoForm!: FormGroup;
  contactPreferenceCtrl!: FormControl;
  emailCtrl!: FormControl;
  confirmCtrl!: FormControl;
  emailForm!: FormGroup;
  phoneCtrl!: FormControl;
  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;
  loginInfoForm!: FormGroup;

  showEmailCtrl$!: Observable<boolean>;
  showPhoneCtrl$!: Observable<boolean>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initFormControls();
    this.initMainForm();
    this.initFormObservable();
  }

  initFormControls(): void {
    this.personalInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

    this.emailCtrl = this.fb.control('');
    this.confirmCtrl = this.fb.control('');

    this.emailForm = this.fb.group({
      email: this.emailCtrl,
      confirm: this.confirmCtrl,
    });

    this.contactPreferenceCtrl = this.fb.control('email');

    this.phoneCtrl = this.fb.control('');

    this.passwordCtrl = this.fb.control('', Validators.required);
    this.confirmCtrl = this.fb.control('', Validators.required);

    this.loginInfoForm = this.fb.group({
      username: ['', Validators.required],
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl,
    });
  }

  initMainForm(): void {
    this.mainForm = this.fb.group({
      personalInfo: this.personalInfoForm,
      contactPreference: this.confirmPasswordCtrl,
      email: this.emailForm,
      phone: this.phoneCtrl,
      loginInfo: this.loginInfoForm,
    });
  }

  initFormObservable() {
    this.showEmailCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map((preference) => {
        return preference === 'email';
      }),
      tap((showEmailCtrl) => {
        this.setEmailControl(showEmailCtrl);
      })
    );

    this.showPhoneCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map((preference) => {
        return preference === 'phone';
      }),
      tap((showPhoneCtrl) => {
        this.setPhoneControl(showPhoneCtrl);
      })
    );
  }

  private setEmailControl(showEmailCtrl: boolean) {
    if (showEmailCtrl) {
      this.emailCtrl.addValidators([Validators.required, Validators.email]);
      this.confirmCtrl.addValidators([Validators.required, Validators.email]);
    } else {
      this.emailCtrl.clearValidators();
      this.confirmCtrl.clearValidators();
    }

    this.emailCtrl.updateValueAndValidity();
    this.confirmCtrl.updateValueAndValidity();
  }

  private setPhoneControl(showPhoneCtrl: boolean) {
    if (showPhoneCtrl) {
      this.phoneCtrl.addValidators([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]);
    } else {
      this.phoneCtrl.clearValidators();
    }
    this.phoneCtrl.updateValueAndValidity();
  }

  getFormControlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
    } else if (ctrl.hasError('email')) {
      return "Merci d'entrer une adresse mail valide";
    } else if (ctrl.hasError('minlength')) {
      return 'Ce numéro de téléphone ne contient pas assez de chiffres';
    } else if (ctrl.hasError('maxlength')) {
      return 'Ce numéro de téléphone contient trop de chiffres';
    } else {
      return 'Ce champ contient une erreur';
    }
  }

  onSubmit(): void {
    console.log(this.mainForm.value);
    this.mainForm.reset();
  }
}
