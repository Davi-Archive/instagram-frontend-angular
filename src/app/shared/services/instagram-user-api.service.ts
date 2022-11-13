import { Injectable } from "@angular/core";
import { UserInstagram } from "../types/user-instagram.types";
import { InstagramApiService } from "./instagram-api.service";

@Injectable({
    providedIn: 'root'
})
export class InstagramUserApi extends InstagramApiService {

    getUserData(): Promise<UserInstagram> {
        return this.get('usuario');
    }

    searchUsers(filter: string): Promise<UserInstagram> {
        return this.get(`pesquisa?filtro=${filter}`);
    }

}