import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Produit} from "../model/produit";


@Injectable({
  providedIn: 'root'
})
export class IProduitServices {
  private api_url = environment.api_url + 'produit';


  constructor(private http: HttpClient)
  { }



  public save(produit: Produit,stockId:Number,userId:Number){
    return this.http.post(this.api_url + '/add-produit/'+stockId+"/"+userId, produit);
  }
  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-products');
  }
  public update(produit: Produit){
    return this.http.put(this.api_url + '/modify-produit', produit);
  }

  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-produit/' + id);
  }

  public findByStockId(id: number){
    return this.http.get(this.api_url + '/GetProduitByStockId/' + id);
  }

  public delete(id: number){

    return this.http.delete(this.api_url + '/remove-produit/' + id);
  }

  public assign(stockId:Number,produitId:Number){

    // @ts-ignore
    return this.http.put(this.api_url + '/AssagnProduitToStock/'+stockId+'/'+produitId);
  }


}
