import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Devagram-Angular';

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      image: [null],
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  public getReferences(nameField: string): AbstractControl {
    return this.form.controls[nameField]
  }

  public submit(): void {
    console.log(this.form.value)
  }
}
