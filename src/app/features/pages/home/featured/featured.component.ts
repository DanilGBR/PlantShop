import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FeaturedProductsStoreService } from 'src/app/features/pages/home/home-store/services/featured-store.service';
import { Product } from 'src/app/core/interfaces/product';
import { FeaturedService } from 'src/app/core/services/featured.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit {
  public featuredProducts$: Observable<Product[]> =
    this.featuredStoreService.selectFeaturedProducts();

  constructor(private featuredStoreService: FeaturedProductsStoreService) {}

  ngOnInit(): void {
    this.featuredStoreService.fetchFeaturedProducts();
  }
}
