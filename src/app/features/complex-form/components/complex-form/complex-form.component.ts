import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss'],
})
export class ComplexFormComponent {
  mainForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  initMainForm(): void {
    this.mainForm = this.fb.group({});
  }
}
