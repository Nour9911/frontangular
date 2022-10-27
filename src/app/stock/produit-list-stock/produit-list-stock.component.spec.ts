import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/stock/produit-list-stock/produit-list-stock.component.spec.ts
import { ProduitListStockComponent } from './produit-list-stock.component';

describe('ProduitListStockComponent', () => {
  let component: ProduitListStockComponent;
  let fixture: ComponentFixture<ProduitListStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitListStockComponent ]
========
import { DetailFactureComponent } from './detail-facture.component';

describe('DetailFactureComponent', () => {
  let component: DetailFactureComponent;
  let fixture: ComponentFixture<DetailFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFactureComponent ]
>>>>>>>> origin/panierBranch:src/app/facture/detail-facture/detail-facture.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/stock/produit-list-stock/produit-list-stock.component.spec.ts
    fixture = TestBed.createComponent(ProduitListStockComponent);
========
    fixture = TestBed.createComponent(DetailFactureComponent);
>>>>>>>> origin/panierBranch:src/app/facture/detail-facture/detail-facture.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
