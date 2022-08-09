import { Component, OnInit } from '@angular/core';
import { PersonajesRMService } from 'src/app/services/personajes-rm.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: any = {};

  constructor(private service: PersonajesRMService) { }

  ngOnInit(): void {
    this.service.getAllPersonajes().subscribe(personajes => {
      this.personajes = personajes.results;
      console.log(this.personajes);
    })
  }

}
