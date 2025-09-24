import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoriesType } from '../models/northwind/categories-type';
import { ProductsType } from '../models/northwind/products-type';
import { Northwind } from '../static-data/northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getCategories(): Observable<CategoriesType[]> {
    return of(Northwind['CategoriesType']);
  }

  public getProducts(): Observable<ProductsType[]> {
    return of(Northwind['ProductsType']);
  }
}
