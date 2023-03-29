import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesStoreService } from 'src/app/app-store/services/articles-store.service';
import { Article } from 'src/app/core/interfaces/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  public articles$: Observable<Article[]> =
    this.articleStoreService.selectArticles();

  constructor(private articleStoreService: ArticlesStoreService) {}

  ngOnInit(): void {
    this.articleStoreService.fetchArticles();
  }
}
