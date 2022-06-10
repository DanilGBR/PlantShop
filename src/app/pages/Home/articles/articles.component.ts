import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from 'src/app/core/interfaces/article';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  public articles$!: Observable<Article[]>;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articles$ = this.getArticles().pipe(
      map((response) => response.articles)
    );
  }

  private getArticles(): Observable<{ message: string; articles: Article[] }> {
    return this.articlesService.getArticles();
  }
}
