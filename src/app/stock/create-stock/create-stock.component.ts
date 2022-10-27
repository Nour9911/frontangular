import { Component, OnInit } from '@angular/core';
import {Stock} from "../../stock/model/stock";
import {MatDialogRef} from "@angular/material/dialog";
import {IStockService} from "../services/stock.service";

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  stock: Stock = new Stock();
  constructor(
    private service: IStockService,
    private dialogRef: MatDialogRef<CreateStockComponent>
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.save(this.stock).subscribe(data => this.dialogRef.close())
  }
}
