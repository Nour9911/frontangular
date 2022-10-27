import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Stock} from "../model/stock";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IStockService {
  private api_url = environment.api_url + 'stock';
  constructor(private http: HttpClient) { }

  public save(stock: Stock){
    return this.http.post(this.api_url + '/add-stock', stock);
  }
  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-stocks');
  }
  public update(stock: Stock){
    return this.http.put(this.api_url + '/modify-stock', stock);
  }
  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-stock/' + id);
  }
  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-stock/' + id);
  }
}
