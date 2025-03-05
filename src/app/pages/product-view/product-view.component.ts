import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iproduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent {
  private productService = inject(ProductService);
  private activateRoute = inject(ActivatedRoute);

  myProduct!: Iproduct;

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      let _id = params._id;
      this.productService.getById(_id).subscribe((product: Iproduct) => {
        this.myProduct = product;
      });
    });
  }
}
