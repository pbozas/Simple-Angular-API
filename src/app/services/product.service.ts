import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from 'src/app/models/product-model';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  formData = new Product();
  
  readonly APIUrl = "https://localhost:44324/api";

  getprList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.APIUrl + '/products');
  }

  addProduct(pr: Product){
    return this.http.post(this.APIUrl+'/products',pr);
  }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}
