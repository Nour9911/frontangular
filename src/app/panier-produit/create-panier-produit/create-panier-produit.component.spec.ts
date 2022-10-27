import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePanierProduitComponent } from './create-panier-produit.component';

describe('CreatePanierProduitComponent', () => {
  let component: CreatePanierProduitComponent;
  let fixture: ComponentFixture<CreatePanierProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePanierProduitComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePanierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
