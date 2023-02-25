import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import rightHeaderLinks from '../constants/rightHeaderLinks';
import centerHeaderLinks from '../constants/centerHeaderLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public centerHeaderLinks = centerHeaderLinks;
  public rightHeaderLinks = rightHeaderLinks;

  public isAdmin = true

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
