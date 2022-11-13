import { Component } from '@angular/core';
import { Post } from './post.type';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent  {
  public posts: Array<Post> = [
    {
      descricao:
        'Aves são uma classe de seres vivos e penas, um bico sem dentes, oviparidade de casca rígida, elevado m. ',
      quantidadeCurtidas: 32,
      foto: 'https://www.petz.com.br/blog/wp-content/uploads/2022/05/passaro-tuim-interna-1.jpg',
      usuario: {
        nome: 'davi',
      },
      comentarios: [
        {
          nome: 'amigo',
          comentario: 'cool',
        },
        {
          nome: 'davi',
          comentario: 'cool',
        },
      ],
    } as Post,
    {
      descricao: 'eu não sou bomzinho',
      quantidadeCurtidas: 32,
      foto: 'https://www.petz.com.br/blog/wp-content/uploads/2020/01/passaros-domesticos.jpg',
      usuario: {
        nome: 'davi',
      },
      comentarios: [
        {
          nome: 'Loro',
          comentario: 'Claro que é bomzinho',
        },
        {
          nome: 'davi',
          comentario: 'cool',
        },
      ],
    } as Post,
  ];
  constructor() {}

  
}
