import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassword } from '../shared/validators/confirmPassword.validator';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private registerService:RegisterService) {
    this.form = this.fb.group({
      file: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, confirmPassword()]]
    })
  }

  public getReferences(nameField: string): AbstractControl {
    return this.form.controls[nameField]
  }

  public handleSubmit(): void {
    if(this.form.invalid){
      alert('Preencha todos os campos corretamente');
      return;
    }

    try {
      const formValues=this.form.value;
      let requisitonBody
      console.log(formValues)
    } catch (error) {

    }
  }


  ngOnInit(): void {
  }

}
