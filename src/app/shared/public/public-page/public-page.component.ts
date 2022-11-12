import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {


  @Input() customClassCSS: string = ''
  @Input() logoClass: string = ''
  @Input() textButtonSubmit?: string;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  public handleSubmit(): void {
    this.submitForm.emit();
  }
}
