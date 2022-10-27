import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import {Produit} from "../model/produit";
import {MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../services/produit.service";

@Component({
  selector: 'app-download-produit',
  templateUrl: './download-produit.component.html',
  styleUrls: ['./download-produit.component.css']
})
export class DownloadProduitComponent implements OnInit {

  produits: Produit[] = [];

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

  captureScreen() {
    let data = document.getElementById('contentToConvert');
    html2canvas(data as any).then(canvas => {
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdfData = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdfData.save(`MyPdf.pdf`);
    });
  }
}
