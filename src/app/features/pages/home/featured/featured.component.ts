import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FeaturedProduct } from 'src/app/core/interfaces/featuredProduct';
import { FeaturedService } from 'src/app/core/services/featured.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit {
  public featuredProducts$!: Observable<FeaturedProduct[]>;

  constructor(private featuredService: FeaturedService) {}

  ngOnInit(): void {
    this.featuredProducts$ = this.getCategories().pipe(
      map((res) => res.featuredProducts)
    );
  }

  private getCategories(): Observable<{
    message: string;
    featuredProducts: FeaturedProduct[];
  }> {
    return this.featuredService.getFeatured();
  }
}
