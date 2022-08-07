import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNewComponentComponent } from './products-new-component.component';

describe('ProductsNewComponentComponent', () => {
  let component: ProductsNewComponentComponent;
  let fixture: ComponentFixture<ProductsNewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsNewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
