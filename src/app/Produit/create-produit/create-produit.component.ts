import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit";
import {IProduitServices} from "../services/produit.service";
import {MatDialogRef} from "@angular/material/dialog";
import {IStockService} from "../../stock/services/stock.service";
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {
  produit: Produit = new Produit();
  stocks: any;
  users: any;
  idStock: any;
  idUser: any;
  currentUser: any;


  constructor(
    private service: IProduitServices,
    private servicestock: IStockService,
    private token: TokenStorageService,
    private dialogRef: MatDialogRef<CreateProduitComponent>
  ) { }

  ngOnInit(): void {
    this.servicestock.findAll().subscribe((data)=>{this.stocks = data})
   // this.serviceuser.getUser().subscribe((data)=>{this.users = data,console.log(data)})
   // this.users = this.serviceuser.getUser();
   // console.log(this.user)
    //private token: TokenStorageService
    //  currentUser: any;
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    console.log(this.currentUser.id)
  }

  add() {
    this.service.save(this.produit,this.idStock,this.currentUser.id).subscribe(data => this.dialogRef.close())

    }
  }



