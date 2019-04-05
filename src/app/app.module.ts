import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiModule } from './rest';
import { HttpClientModule } from '@angular/common/http';
import { MComponent } from './m/m.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    MComponent,
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
