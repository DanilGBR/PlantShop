import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import rightHeaderLinks from '../constants/rightHeaderLinks';
import centerHeaderLinks from '../constants/centerHeaderLinks';
import { AuthStoreService } from 'src/app/features/auth/services/auth-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public centerHeaderLinks = centerHeaderLinks;
  public rightHeaderLinks = rightHeaderLinks;
  public isAdmin$!: Observable<boolean | null>;

  constructor(private router: Router, private authStore: AuthStoreService) {}

  ngOnInit(): void {
    this.isAdmin$ = this.authStore.getUserInfo();
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
