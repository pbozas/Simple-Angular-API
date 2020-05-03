import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from 'src/app/models/product-model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}
  
  readonly APIUrl = "https://localhost:44324/api";
  getprList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.APIUrl + '/products');
  }

}
