import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../interfaces/iproduct';
import { Iresponse } from '../../interfaces/iresponse';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  private productService = inject(ProductService);

  arrProducts: Iproduct[];

  constructor() {
    this.arrProducts = [];
  }
  ngOnInit() {
    this.productService.getAll().subscribe((data: Iresponse) => {
      this.arrProducts = data.results;
    });
  }
}
