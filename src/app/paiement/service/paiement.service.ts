import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Paiement} from "../model/paiement";


@Injectable({
  providedIn: 'root'
})
export class IPaiementServices {
  private api_url = environment.api_url + 'paiement';
  constructor(private http: HttpClient) { }

  public save(paiement: Paiement,userId:any){
    return this.http.post(this.api_url + '/add-paiement/'+userId, paiement);
  }

  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-paiement');
  }

  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-paiement/' + id);
  }

  public findBydUser(userId: any){
    return this.http.get(this.api_url + '/retrieve-paiements-by-user/' + userId);
  }

  public findProducts(id: number){
    return this.http.get(this.api_url + '/retrieve-paiement-produits/' + id);
  }


  //public update(paiement: Paiement){
  //  return this.http.put(this.api_url + '/update-paiement', paiement);
  //}

  //public delete(id: number){
  //  return this.http.delete(this.api_url + '/remove-paiement/' + id);
  //}


}

