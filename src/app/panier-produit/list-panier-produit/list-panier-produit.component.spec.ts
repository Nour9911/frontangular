import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPanierProduitComponent } from './list-panier-produit.component';

describe('ListPanierProduitComponent', () => {
  let component: ListPanierProduitComponent;
  let fixture: ComponentFixture<ListPanierProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPanierProduitComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPanierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
