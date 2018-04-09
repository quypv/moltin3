import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductPage } from './list/product-page';
import { ProductDetailPage } from './detail/product-detail-page';
import { ProductRoutes as routes } from './product.routes';

@NgModule({
  declarations: [
    ProductPage,
    ProductDetailPage
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class ProductModule {}