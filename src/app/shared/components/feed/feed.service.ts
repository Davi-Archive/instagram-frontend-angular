import { Injectable } from '@angular/core';
import { InstagramApiService } from '../../services/instagram-api.service';
import { ResponseInstagramApi } from '../../types/response-api-instagram.type';

@Injectable({
  providedIn: 'root'
})
export class FeedService extends InstagramApiService {

  async loadPosts(): Promise<any> {
    return this.get('feed');
  }

  async alternateLikeDislike(postId:string):Promise<ResponseInstagramApi>{
    return this.put(`like?id=${postId}`,{});
  }
}
