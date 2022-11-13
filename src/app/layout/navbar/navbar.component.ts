import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './item-menu.types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private routesMap: MenuItem = {
    home: {
      img: 'home',
      routes: ['/']
    },
    publicacao: {
      img: 'publicacao',
      routes: ['/login']
    },
    perfil: {
      img: 'usuario',
      routes: ['/user']
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getImage(menu: string): string {
    const menuRoute = this.routesMap[menu];
    const icon = menuRoute.routes.includes(this.router.url)
      ? `${menuRoute.img}Ativo` : menuRoute.img
    return `assets/images/${icon}.svg`
  }

  public redirectTo(menu: string): void {
    const menuRoute = this.routesMap[menu]
    this.router.navigateByUrl(menuRoute.routes[0])
  }
}
