import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Stock} from "../model/stock";
import {IStockService} from "../services/stock.service";

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  stock: Stock = new Stock();

  constructor(
    private service: IStockService,
    private dialogRef: MatDialogRef<UpdateStockComponent>,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(response => {
      this.stock = response;
    })
  }


  update() {
    this.service.update(this.stock).subscribe(r => this.dialogRef.close())
  }
}
