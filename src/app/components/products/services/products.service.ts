import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = '';
  
  //facture usa el contructor o en este caso se usara para llamado de la API
  constructor(
    private http: HttpClient
  ) { }

  getProducts(filtros: any) {
    const endpoint  = 'products/get'; 
    const url = `${this.API_URL}${endpoint}`;
    return this.http.post(url, filtros);
  }
}
