import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import URLS from 'src/app/core/constants/urls';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  constructor(private routerService: Router) {}

  ngOnInit(): void {}

  goToCatalogue(): void {
    this.routerService.navigate([URLS.CATALOGUE]);
  }
}
