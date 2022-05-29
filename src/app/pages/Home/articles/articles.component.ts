import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/interfaces/article';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  public articles: Article[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(): void {
    this.articlesService.getArticles().subscribe((results: Article[]) => {
      this.articles = results;
    });
  }
}
