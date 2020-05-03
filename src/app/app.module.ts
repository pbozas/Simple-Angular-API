import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { ProductComponent } from './product/product.component';
import { ShowPrComponent } from './product/show-pr/show-pr.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustComponent } from './customer/show-cust/show-cust.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShowPrComponent,
    CustomerComponent,
    ShowCustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [ProductService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
