import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  disparadorDeFavoritos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
