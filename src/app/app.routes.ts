import { Routes } from '@angular/router';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: ProductListComponent },
  { path: 'product/:_id', component: ProductViewComponent },
  { path: '**', redirectTo: 'home' },
];
