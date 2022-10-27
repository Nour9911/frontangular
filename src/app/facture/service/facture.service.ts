import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Facture} from "../model/facture";


@Injectable({
  providedIn: 'root'
})
export class IFactureServices {
  private api_url = environment.api_url + 'facture';
  constructor(private http: HttpClient) { }

  public save(facture: Facture, paiementId:Number){
    return this.http.post(this.api_url + '/add-facture/'+paiementId, facture);
  }

  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-facture');
  }

  public update(facture: Facture){
    return this.http.put(this.api_url + '/update-facture', facture);
  }

  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-facture/' + id);
  }

  public findByUser(userId: number){
    return this.http.get(this.api_url + '/retrieve-factures-by-user/' + userId);
  }

  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-facture/' + id);
  }

  public pdf(id: number){
    return this.http.get(this.api_url + '/printPDF/'+ id);
  }



}
