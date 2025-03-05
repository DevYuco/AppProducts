import { Routes } from '@angular/router';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: ProductListComponent },
  { path: 'product/:_id', component: ProductViewComponent },
  { path: '**', component: NotFoundComponent },
];
