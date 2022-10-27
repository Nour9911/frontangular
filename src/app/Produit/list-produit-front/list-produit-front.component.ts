import {Component, Inject, OnInit} from '@angular/core';
import {Produit} from "../model/produit";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../services/produit.service";
import {ProduitDetailsComponent} from "../produit-details/produit-details.component";
import {UpdateProduitComponent} from "../update-produit/update-produit.component";
import {IStockService} from "../../stock/services/stock.service";
import {iPanierProduit} from "../../panier-produit/model/panierproduit";
import {PanierProduit} from "../../panier-produit/model/panierproduit";
import {CreatePanierProduitComponent} from "../../panier-produit/create-panier-produit/create-panier-produit.component";
import {ListFactureBackComponent} from "../../facture/list-facture-back/list-facture-back.component";
import {CreateFactureComponent} from "../../facture/create-facture/create-facture.component";

@Component({
  selector: 'app-list-produit-front',
  templateUrl: './list-produit-front.component.html',
  styleUrls: ['./list-produit-front.component.css']
})
export class ListProduitFrontComponent implements OnInit {

  produitdetail?: Produit;
  produits: Produit[] = [];
  stocks: any;
  idStock: any;
  searchText: any;
  popup: boolean=false;
  totalLength:any;
  page:number = 1;

  constructor(
    private dialog: MatDialog,
    private service: IProduitServices,
    private servicestock: IStockService,


  ) {
  }

  ngOnInit(): void {


    this.service.findAll().subscribe(r => {
      // @ts-ignore
      this.produits = r;

    })

    this.servicestock.findAll().subscribe((r)=>{this.stocks = r})

  }


  Onpopup(produit: Produit){
    this.produitdetail = produit;
    this.popup = true;
  }

  openShowDialog3(r: any) {
    const dialogRef = this.dialog.open(CreatePanierProduitComponent, {
      width: '400px',
      data: {
        id: r.idProduit
      }

    });
  }







}

