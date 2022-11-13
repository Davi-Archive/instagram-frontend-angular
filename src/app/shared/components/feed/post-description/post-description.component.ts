import { Component, Input } from '@angular/core';
import { LoggedUser } from 'src/app/authentication/logged-user.types';
import { Post } from '../post.type';

const descriptionCharatersLimit = 90;

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent {

  @Input() public post?: any = {} as Post
  @Input() public loggedUser?: LoggedUser | null = null;

  public quantityOfRowsTextarea: number = 1;
  public currentComment: string = ''
  public alternateShowCommentBox: boolean = false;

  public descriptionCharatersLimit: number = descriptionCharatersLimit;
  constructor() { }

  public showFullDescription(): void {
    this.descriptionCharatersLimit = 99999;
  }


  public changeExibitionCommentBox(): void {
    this.alternateShowCommentBox = !this.alternateShowCommentBox;
  }

  public getCommentImage(): string {
    const baseIcon = this.alternateShowCommentBox ?
      'comentarioAtivo.svg'
      : 'comentario.svg';
    return `assets/images/${baseIcon}`;
  }

  public makeComment(): void {
    console.log('make comment')
  }

  public checkRowsNumber() {
    this.quantityOfRowsTextarea = this.currentComment.length > 0 ? 2 : 1
  }
}
