import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadProduitComponent } from './download-produit.component';

describe('DownloadProduitComponent', () => {
  let component: DownloadProduitComponent;
  let fixture: ComponentFixture<DownloadProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadProduitComponent ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadProduitComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
