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
    post: {
      img: 'publicacao',
      routes: []
    },
    profile: {
      img: 'usuario',
      routes: []
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

}
