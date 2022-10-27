import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/Produit/produit-details/produit-details.component.spec.ts
import { ProduitDetailsComponent } from './produit-details.component';

describe('ProduitDetailsComponent', () => {
  let component: ProduitDetailsComponent;
  let fixture: ComponentFixture<ProduitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitDetailsComponent ]
========
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
>>>>>>>> origin/panierBranch:src/app/user/user.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/Produit/produit-details/produit-details.component.spec.ts
    fixture = TestBed.createComponent(ProduitDetailsComponent);
========
    fixture = TestBed.createComponent(UserComponent);
>>>>>>>> origin/panierBranch:src/app/user/user.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
