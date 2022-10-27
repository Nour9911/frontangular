import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../../Produit/model/produit";
import {MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../../Produit/services/produit.service";

@Component({
  selector: 'app-produit-list-stock',
  templateUrl: './produit-list-stock.component.html',
  styleUrls: ['./produit-list-stock.component.css']
})
export class ProduitListStockComponent implements OnInit {

  produits: Produit[] = [];
  @Input()
  idStock: any;
  searchText:any;
  constructor(
    private dialog: MatDialog,
    private service: IProduitServices
  ) { }

  ngOnInit(): void {
    this.service.findByStockId(this.idStock).subscribe(data => {
      // @ts-ignore
      this.produits = data;
    })
  }

}
