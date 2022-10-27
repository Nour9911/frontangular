import {Produit} from "src/app/Produit/model/produit";
export interface IStock{
  idStock?: number;
  quantite?: number;
  quantiteMin?: number;
  libelleStock?: string;
  supplier_name?: string;
  supplier_mail?: string;
  ListProduits?: Object;
}

export class Stock implements IStock{


  constructor(
  public  idStock?: number,
  public quantite?: number,
  public quantiteMin?: number,
  public libelleStock?: string,
  public supplier_name?: string,
  public supplier_mail?: string,
  public ListProduits?: Produit[]
  )
  {
  }
}
