import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListProduitComponent} from "./Produit/list-produit/list-produit.component";
import {ListProduitFrontComponent} from "./Produit/list-produit-front/list-produit-front.component";
import {ListProduitBackComponent} from "./Produit/list-produit-back/list-produit-back.component";
import {ListStockComponent} from "./stock/list-stock/list-stock.component";
import {ListStockBackComponent} from "./stock/list-stock-back/list-stock-back.component";
import {ProduitDetailsComponent} from "./Produit/produit-details/produit-details.component";
import {DownloadProduitComponent} from "./Produit/download-produit/download-produit.component";
import {DetailFactureComponent} from "./facture/detail-facture/detail-facture.component";
import {ListFactureBackComponent} from "./facture/list-facture-back/list-facture-back.component";
import {DetailPaiementComponent} from "./paiement/detail-paiement/detail-paiement.component";
import {ListPanierProduitComponent} from "./panier-produit/list-panier-produit/list-panier-produit.component";

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },{
    path: 'produit',
    component: ListProduitComponent
  },{
    path: 'produitAll',
    component: ListProduitFrontComponent
  },{
    path: 'produitback',
    component: ListProduitBackComponent
  },{
    path: 'produitdetail',
    component: ProduitDetailsComponent
  },{
    path: 'stock',
    component: ListStockComponent
  },{
    path: 'stockback',
    component: ListStockBackComponent
  },{
    path: 'prodpdf',
    component: DownloadProduitComponent
  },{
    path: 'detailfacture',
    component: DetailFactureComponent
  },{
    path: 'listfacture',
    component: ListFactureBackComponent
  },{
    path: 'detailpaiement',
    component: DetailPaiementComponent
  },{
  path: 'listpanierproduit',
    component: ListPanierProduitComponent
  },{
    path: 'listfactureback',
    component: ListFactureBackComponent
  },  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
