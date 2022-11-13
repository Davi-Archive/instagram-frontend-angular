import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/app/shared/authentication/logged-user.types';
import { UserInstagram } from 'src/app/shared/types/user-instagram.types';

@Component({
  selector: 'app-cabecalho-perfil',
  templateUrl: './cabecalho-perfil.component.html',
  styleUrls: ['./cabecalho-perfil.component.scss']
})
export class CabecalhoPerfilComponent implements OnInit {

  @Input() usuario?: UserInstagram | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public voltarParaHome() {
    this.router.navigateByUrl('/')
  }
}
