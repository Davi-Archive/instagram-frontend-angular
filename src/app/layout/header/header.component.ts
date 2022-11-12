import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstagramApiService } from 'src/app/shared/services/instagram-api.service';
import { UserInstagram } from 'src/app/shared/types/user-instagram.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchTerm: string = '';
  public searchResult: Array<UserInstagram> = []
  constructor(
    private router: Router,
    private apUserInstagram: InstagramApiService
    ) { }

  ngOnInit(): void {
  }


  public goToHome(): void {
    this.router.navigateByUrl('/');
  }


  public async searchUsers(): Promise<void> {
    if (this.searchTerm.length < 3) return;

    try {
      const usersReturned
    } catch (error: any) {
      const errorMessage = error.error.error
      alert(errorMessage);
    }
    console.log(this.searchTerm)
  }

  public goToUserProfile(userId: string): void {
    console.log(`printando o id do usuario ${userId}`)
  }
}
