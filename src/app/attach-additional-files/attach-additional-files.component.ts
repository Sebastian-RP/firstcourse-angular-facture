import { Component, OnInit } from '@angular/core';
import { FavoriteServiceService } from '../favorite-service.service';

@Component({
  selector: 'app-attach-additional-files',
  templateUrl: './attach-additional-files.component.html',
  styleUrls: ['./attach-additional-files.component.scss']
})
export class AttachAdditionalFilesComponent implements OnInit {

  valueInput: string = "";

  constructor(private servicioFavorito: FavoriteServiceService) { 
  }

  ngOnInit(): void {
    this.agregarFavorito()
  }

  agregarFavorito() {
    this.servicioFavorito.disparadorDeFavoritos.subscribe(data => {
      this.valueInput = data;
    });
  }

}

// https://www.youtube.com/watch?v=HTivuXwS2-Y&ab_channel=LeiferMendez