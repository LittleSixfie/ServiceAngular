import { Component, Output } from '@angular/core';
import {ServiceCallService} from "./service-call.service"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service';
  client:any;
  llamada:Observable<any>;
  nombre:string = "";
  list = [{name:"bulbasur"}];
  object:Object = {};

  nombrePasar:string ="";
  orderPasar:number=0;
  alturaPasar:number=0;
  pesoPasar:number=0;


  constructor(private http: HttpClient) {
    this.client =  new ServiceCallService(this.http)
    this.llamada = this.client.getPokemons()
    this.llamada.subscribe(data => {
      this.list = data.results
    })
  }

  click(nombre:string){
    this.nombre = nombre;
    this.llamada = this.client.getPokemon(nombre);
    this.llamada.subscribe(data => {
      this.nombrePasar = data.name;
      this.alturaPasar = data.height;
      this.pesoPasar = data.weight;
      this.orderPasar = data.order;
    })

  }

  

}
