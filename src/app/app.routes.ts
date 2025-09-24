import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { HomeChildViewComponent } from './home-child-view/home-child-view.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-child-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home-child-view', component: HomeChildViewComponent, data: { text: 'Home-Child-View' } },
  { path: 'categories', component: CategoriesComponent, data: { text: 'Categories' } },
  { path: 'products', component: ProductsComponent, data: { text: 'Products' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
