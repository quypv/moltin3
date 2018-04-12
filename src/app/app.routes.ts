import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './product/index#ProductModule',
    data: {
        hello: 'world'
    }
  },
  // {
  //   path: 'checkout',
  //   loadChildren: './checkout/checkout.module#CheckoutModule' 
  // },
];