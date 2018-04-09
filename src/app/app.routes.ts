import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from './product/list/product-page';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './product/index#ProductModule' 
  },
  // {
  //   path: 'checkout',
  //   loadChildren: './checkout/checkout.module#CheckoutModule' 
  // },
];