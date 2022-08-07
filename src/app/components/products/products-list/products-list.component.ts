import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public productsForm!: FormGroup;
  public productsList: Array<any> = [];
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(
    private service: ProductsService
  ) { } 

  ngOnInit(): void { //funcion on init se ejecuta cuando todo el HTML es cargado
    this.buildForm();
  }
   
  buildForm() {
    this.productsForm = new FormGroup({//this, referirse a la propiedad de esta misma clase
      name: new FormControl('', [Validators.pattern(new RegExp('[a-zA-Z]')), Validators.maxLength(5)]),
      code: new FormControl(),
    })
  } 

  submit() {
    console.log(this.productsForm.value);//productForm, valor del formulario con el campo name y code this.productsForm
    
    //llamamos un metodo del servicio creado
  //   this.service.getProducts(this.productsForm.value).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       this.productsList = res.items;
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   )
  }

}
