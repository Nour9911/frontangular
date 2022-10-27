import {Component, Inject, OnInit} from '@angular/core';
import {Facture} from "../model/facture";
import {IFactureServices} from "../service/facture.service";
import {IPaiementServices} from "../../paiement/service/paiement.service";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Paiement} from "../../paiement/model/paiement";
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.css']
})
export class CreateFactureComponent implements OnInit {
  //paiement: Paiement;
  facture: Facture = new Facture();
  test: any = this.data.id;
  currentUser: any;
  constructor(
    private service: IFactureServices,
    private dialogRef: MatDialogRef<CreateFactureComponent>,
    private dialog: MatDialog,
    private token: TokenStorageService,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    console.log(this.currentUser.id);

  }

  add() {
    this.service.save(this.facture,this.data.id).subscribe(r =>
    this.dialogRef.close())
    alert("The list of bills has been updated!")
  }

}
