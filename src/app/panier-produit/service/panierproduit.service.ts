import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PanierProduit} from "../model/panierproduit";


@Injectable({
  providedIn: 'root'
})
export class IPanierProduitServices {
  private api_url = environment.api_url + 'panierproduit';
  constructor(private http: HttpClient) { }

  public addToPanier(panierproduit: PanierProduit, produitId: Number, quantity: Number, userId: Number){
    return this.http.post(this.api_url + '/addToPanier/'+produitId+'/'+quantity+'/'+userId, panierproduit);
  }

  public updateQuantity(panierproduit: PanierProduit){
    return this.http.put(this.api_url + '/updateQuantity/', panierproduit);
  }

  public getPanier(userId: number){
    return this.http.get(this.api_url + '/getPanier/' + userId);
  }

  public getPanierProduit(ppId: number){
    return this.http.get(this.api_url + '/getPanierProduit/' + ppId);
  }

  public removeFromPanier(userId:number, produitId: number){
    return this.http.delete(this.api_url + '/removeFromPanier/' + userId + '/' + produitId);
  }


}

