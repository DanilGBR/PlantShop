import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/core/interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input()
  item!: Article;

  constructor() {}

  ngOnInit(): void {}
}
