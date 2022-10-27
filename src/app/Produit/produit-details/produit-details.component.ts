import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../model/produit";
import {MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../services/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CreatePanierProduitComponent} from "../../panier-produit/create-panier-produit/create-panier-produit.component";

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {
  @Input()
  produit?: any ;
  searchText: any;


  constructor(
    private dialog: MatDialog,
  )

  {
  }


  ngOnInit(): void {

    console.log(this.produit)


  }

  openShowDialog3(r: any) {
    const dialogRef = this.dialog.open(CreatePanierProduitComponent, {
      width: '400px',
      data: {
        id: r.idProduit
      }

    });
  }

  cancel(){
    this.dialog.closeAll();
  }


}
