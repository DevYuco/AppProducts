import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() myProduct!: Iproduct;
  @Input() parent: string = '';
}
