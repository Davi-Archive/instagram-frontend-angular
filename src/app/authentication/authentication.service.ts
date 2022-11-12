import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InstagramApiService } from '../shared/services/instagram-api.service';
import { InstagramUserApi } from '../shared/services/instagram-user-api.service';
import { InstagramCredentials } from './instagram-credentials.type';
import { ResponseLoginInstagram } from './login-response-instagram.type';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends InstagramApiService {

  constructor(
    protected _http: HttpClient,
    @Inject('INSTAGRAM_URL_API') private _instagramUrlApi: string,
    private router: Router,
    private userApiService:InstagramUserApi
  ) {
    super(_http, _instagramUrlApi);
  }

  async login(credentials: InstagramCredentials): Promise<void> {
    const loginResponse: ResponseLoginInstagram = await this.post('login', credentials);
    if (!loginResponse.token) {
      throw new Error('Login Inválido');
    }

    localStorage.setItem('token', loginResponse.token);
    localStorage.setItem('name', loginResponse.nome);
    localStorage.setItem('email', loginResponse.email)

    //more user info TODO
    const userData = await this.userApiService.getUserData();
    localStorage.setItem("id", userData._id)
    localStorage.setItem('name',userData.nome)
    if(userData.avatar){
      localStorage.setItem("avatar", userData.avatar)
    }

    this.router.navigateByUrl('/');
  }

  isLogged(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');


    this.router.navigateByUrl('/login')
  }


  //TODO user details
}
