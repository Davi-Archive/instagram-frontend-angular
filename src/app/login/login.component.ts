import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      image: [null],
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
  public getReferences(nameField: string): AbstractControl {
    return this.form.controls[nameField]
  }

  public submit(): void {
    //TODO Api integration
    console.log(this.form.value)
  }


  ngOnInit(): void {
  }

}
