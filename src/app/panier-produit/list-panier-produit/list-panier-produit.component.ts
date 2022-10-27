import { Component, OnInit } from '@angular/core';
import {IFactureServices} from "../../facture/service/facture.service";
import {IPanierProduitServices} from "../service/panierproduit.service";
import {IProduitServices} from "../../Produit/services/produit.service";
import {Produit} from "../../Produit/model/produit";
import {iPanierProduit, PanierProduit} from "../model/panierproduit";
import {MatDialog} from "@angular/material/dialog";
import {ListFactureBackComponent} from "../../facture/list-facture-back/list-facture-back.component";
import {CreatePaiementComponent} from "../../paiement/create-paiement/create-paiement.component";
import {CreateFactureComponent} from "../../facture/create-facture/create-facture.component";
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-list-panier-produit',
  templateUrl: './list-panier-produit.component.html',
  styleUrls: ['./list-panier-produit.component.css']
})
export class ListPanierProduitComponent implements OnInit {
  panierProduits: PanierProduit[] = [];
  value?:number;
  pan?: PanierProduit;
  private total: number = 0;
  currentUser: any;

  constructor(
    private service: IPanierProduitServices,
    private dialog: MatDialog,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    console.log(this.currentUser.id)



    this.service.getPanier(this.currentUser.id).subscribe(data => {
      // @ts-ignore
      this.panierProduits = data;
      console.log(data);
    });



  }


  updateQ(pp:any) {
    this.service.updateQuantity(pp)
      .subscribe(r => {
        console.log(r);
        //this.ngOnInit();

      }, error => console.log(error));
  }

  openShowDialog() {
    const dialogRef = this.dialog.open(ListFactureBackComponent, {
      width: '800px'
    });
  }

  openShowDialog2() {
    const dialogRef = this.dialog.open(CreatePaiementComponent, {
      width: '800px',
      data: {
        p: this.total
      }
    });
  }



  //getSomme(){
  //  this.somme = 500;
  //  return this.somme;
  //}


  getSomme(){
    let totalPrice: number = 0;
    let totalQuantity: number = 0;

    for (let pan of this.panierProduits){
      // @ts-ignore
      totalPrice+=pan.quantity * pan.produit?.prix;
      // @ts-ignore
      totalQuantity+=pan.quantity;
    }
    return totalPrice;
  }

  viderPaniertest(){
    if(confirm('Do you want to empty the basket?')) {
    let i: number;
    for (let i of this.panierProduits ) {
      this.removePP(i.idPanierProduit);
      this.ngOnInit();
      }
    }
  }

  viderPanier() {
    if (confirm('Do you want to empty the basket?')) {
      let i: number;

      for (let i of this.panierProduits) {
        console.log(i.produit?.idProduit);
        this.service.removeFromPanier(this.currentUser.id, i.produit?.idProduit)
          .subscribe(data => {
            console.log("deleted");
            this.ngOnInit();
          }, error => console.log(error));
        this.ngOnInit();
      }
    }
  }

  getTotal(){
    this.total = this.getSomme() + (this.getSomme() / 100 ) * 5;

    return this.total;
  }

  removePP(produitId: any){
    if(confirm('Do you really want to delete this product?')) {
      this.service.removeFromPanier(this.currentUser.id, produitId)
        .subscribe(data => {
          console.log("deleted");
          this.ngOnInit();
        }, error => console.log(error));
    }
  }

  inc(pp: any)  {
    pp.quantity++;
  }

  dec(pp: any)  {
    pp.quantity--;
  }





  //supprimer(id: any) {
   // if(confirm('voulez vous vraiment supprimer ?')){
   //   this.service.delete(id).subscribe(r => this.ngOnInit());
   // }
  //}

  //addQte() {
  //  this.service.update(this.panierProduits).subscribe();
  //}

}
