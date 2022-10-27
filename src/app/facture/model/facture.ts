import {iPaiement, Paiement} from "../../paiement/model/paiement";

export interface iFacture{
  idFacture?: number;
  date?: Date;
  type?: string;
  etat_livraison?: string;
  paiement?: Paiement;
  user?: any;

}

export class Facture implements iFacture {
  constructor(
    public idFacture?: number,
    public date?: Date,
    public type?: string,
    public etat_livraison?: string,
    public paiement?: Paiement,
    public user?: any,

  ) {
  }
}
