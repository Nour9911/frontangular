import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Produit} from "../model/produit";
import {IProduitServices} from "../services/produit.service";
import {CreateProduitComponent} from "../create-produit/create-produit.component";
import {UpdateProduitComponent} from "../update-produit/update-produit.component";
import swal from "sweetalert";


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  produits: Produit[] = [];
  searchText:any;

  constructor(
    private dialog: MatDialog,
    private service: IProduitServices
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      // @ts-ignore

      this.produits = data;
    })

  }


  openAddDialog() {
    const dialogRef = this.dialog.open(CreateProduitComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openUpdateDialog(id: any) {
    const dialogRef = this.dialog.open(UpdateProduitComponent, {
      width: '400px',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  supprimer(id: any) {
    if(confirm('Do you want to delete this product ?')){
      this.service.delete(id).subscribe(r => this.ngOnInit());
    }
  }


  delete(produit: Produit) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete: any) => {

        if (willDelete) {
          let i =this.produits.indexOf(produit)

          // @ts-ignore
          this.service.delete(produit.idProduit).subscribe(
            ()=>this.produits.splice(i,1)
          )
          ;
          swal("Product has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Product  is safe!");
        }
      });

  }


}
