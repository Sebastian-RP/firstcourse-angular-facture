import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FavoriteServiceService } from '../favorite-service.service';

@Component({
  selector: 'app-test-additional',
  templateUrl: './test-additional.component.html',
  styleUrls: ['./test-additional.component.scss']
})
export class TestAdditionalComponent implements OnInit {

  public productsForm!: FormGroup;

  constructor(private servicioFavorito: FavoriteServiceService) {
    this.buildForm()
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.productsForm = new FormGroup({//this, referirse a la propiedad de esta misma clase
      valueTest: new FormControl('', Validators.minLength(2)),
    })
  } 

  agregaFavorito() {
    this.servicioFavorito.disparadorDeFavoritos.emit(
      this.productsForm.get("valueTest")?.value
    );
  }

}
