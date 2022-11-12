import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {


  @Input() customClassCSS: string = ''
  @Input() logoClass: string = ''
  @Input() textButtonSubmit?:string;
  constructor() { }

  ngOnInit(): void {
  }


  public handleSubmit(): void {
    console.log('submit')
  }
}
