import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';

// Modules
// import { SharedModule } from '../shared/index';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    // FooterComponent,

    // sub components
    // ProfileDropdownComponent

    // pipes
  ],
  exports: [
    HeaderComponent,
    // FooterComponent,
  ],
  imports: [
    // SharedModule,
    RouterModule
  ]
})
export class LayoutModule {}