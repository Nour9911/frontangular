import {Component, Inject, OnInit} from '@angular/core';
import {IProduitServices} from "../services/produit.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Produit} from "../model/produit";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  produit: Produit = new Produit();

  constructor(
    private service: IProduitServices,
    private dialogRef: MatDialogRef<UpdateProduitComponent>,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(response => {
      this.produit = response;
    })
  }


  update() {
    this.service.update(this.produit).subscribe(r => this.dialogRef.close())
  }
}
