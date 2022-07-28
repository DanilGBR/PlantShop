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
  constructor(private router: Router) {}

  public centerHeaderLinks = centerHeaderLinks;
  public rightHeaderLinks = rightHeaderLinks;

  ngOnInit(): void {}

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}
