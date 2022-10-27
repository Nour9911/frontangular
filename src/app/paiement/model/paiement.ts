

export interface iPaiement{
  idPaiement?: number;
  nature?: string;
  date?: Date;
  sommetotal?: number;
  card?: number;
  cvc?: number;
  exp?: string;
  produits?: any;
  user?: any;

}

export class Paiement implements iPaiement {
  constructor(
    public idPaiement?: number,
    public nature?: string,
    public date?: Date,
    public sommetotal?: number,
    public card?: number,
    public cvc?: number,
    public exp?: string,
    public produits?: any,
    public user?: any,

) {
}
}
