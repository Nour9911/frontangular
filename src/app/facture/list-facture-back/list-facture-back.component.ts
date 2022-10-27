import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Facture} from "../model/facture";
import {IFactureServices} from "../service/facture.service";
//import {pdf} from "../../../environments/environment";
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-list-facture-back',
  templateUrl: './list-facture-back.component.html',
  styleUrls: ['./list-facture-back.component.css']
})
export class ListFactureBackComponent implements OnInit {

  factures: Facture[] = [];
  //pdfLink: any;
  currentUser: any;

  constructor(
    private dialog: MatDialog,
    private token: TokenStorageService,
    private service: IFactureServices) {
  }

  ngOnInit(): void {

    //this.pdfLink = pdf;

    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    console.log(this.currentUser.id);


    this.service.findByUser(this.currentUser.id).subscribe(data => {
      // @ts-ignore
      this.factures = data;
    })
  }



}
