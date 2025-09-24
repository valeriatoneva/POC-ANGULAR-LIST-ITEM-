import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_PIVOT_GRID_DIRECTIVES } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ProductsType } from '../models/northwind/products-type';
import { NorthwindService } from '../services/northwind.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-products',
  imports: [IGX_PIVOT_GRID_DIRECTIVES],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindProducts: ProductsType[] = [];

  constructor(
    private northwindService: NorthwindService,
    protected stateService: StateService,
  ) {}


  ngOnInit() {
    this.northwindService.getProducts().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindProducts = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
