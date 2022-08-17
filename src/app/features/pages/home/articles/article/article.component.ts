import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import URLS from 'src/app/core/constants/urls';
import { Article } from 'src/app/core/interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() item!: Article;

  constructor(private routerService: Router) {}

  ngOnInit(): void {}

  goToArticleId(): void {
    this.routerService.navigate([URLS.ARTICLE + '/' + this.item.edition]);
  }
}
