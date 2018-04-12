import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { CheckoutHeaderComponent } from './checkout-header/checkout-header';
import { CheckoutFooterComponent } from './checkout-footer/checkout-footer';

// Modules
// import { SharedModule } from '../shared/index';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    CheckoutHeaderComponent,
    CheckoutFooterComponent,

    // sub components
    // ProfileDropdownComponent

    // pipes
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CheckoutHeaderComponent,
    CheckoutFooterComponent,
  ],
  imports: [
    // SharedModule,
    RouterModule
  ]
})
export class LayoutModule {}