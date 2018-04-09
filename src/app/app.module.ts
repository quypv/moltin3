import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, PreloadAllModules } from "@angular/router";

// Components
import { AppComponent } from './app.component';
// Routes
import { routes } from './app.routes';
// Modules
import { ProductModule } from './product/index';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true}),
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
