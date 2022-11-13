import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';
import { LoggedUser } from 'src/app/shared/authentication/logged-user.types';
import { FeedService } from './feed.service';
import { Post } from './post.type';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnChanges {
  public loggedUser: LoggedUser | null;

  constructor(
    private authenticationService: AuthenticationService,
    private feedService: FeedService
  ) {
    this.loggedUser = this.authenticationService.getLoggedUser()
  }

  public posts: Array<Post> = [];

  async ngOnInit(): Promise<void> {
    try {
      const { result } = await this.feedService.loadPosts();
      this.posts = result.map((e: any) => ({
        ...e,
        estaCurtido: e.likes.includes(this.loggedUser?.id || ''),
        quantidadeCurtidas: e.likes.length
      }) as Post)
    } catch (error: any) {
      alert(error?.error?.error || 'Erro ao carregar o feed.')
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change')
  }
}
