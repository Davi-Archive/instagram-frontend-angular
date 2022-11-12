import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-public-input',
  templateUrl: './public-input.component.html',
  styleUrls: ['./public-input.component.scss']
})
export class PublicInputComponent implements OnInit {

  @Input() public referencesForm?: AbstractControl;
  @Input() public image?: string
  @Input() public type?: string
  @Input() public placeholder?: string
  constructor() { }

  ngOnInit(): void {
  }

  public onInputChange(event: Event): void {
    this.referencesForm?.setValue(event);
    this.referencesForm?.markAsDirty()
  }

  public getErrorMessage(): string {
    console.log(this.referencesForm)
    if(!this.referencesForm?.errors)  return ''

    if(this.referencesForm?.errors?.['required']){
      console.log(this.referencesForm.errors)
      return 'Campo obrigatório'
    }

    return 'Problemas no Preenchimento'
  }
}
