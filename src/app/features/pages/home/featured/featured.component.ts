import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { FeaturedService } from 'src/app/core/services/featured.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit {
  public featuredProducts$!: Observable<Product[]>;

  constructor(private featuredService: FeaturedService) {}

  ngOnInit(): void {
    this.featuredProducts$ = this.getCategories().pipe(
      map((res) => res.featuredProducts)
    );
  }

  private getCategories(): Observable<{
    featuredProducts: Product[];
  }> {
    return this.featuredService.getFeatured();
  }
}
