import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {

  
  constructor(private http: HttpClient) { }
  rootURL = "https://pokeapi.co/api/v2/";

  getPokemon(poke:String) {
    return this.http.get(this.rootURL+"pokemon/"+poke);
  }

  getPokemons() {
    let headers = new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
      'access-control-allow-origin': '*',
      'access-control-allow-methods' : 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Acceptaccess-control-allow-methods: GET, OPTIONS'
		});
    return this.http.get(this.rootURL+"pokemon?limit=9")
  }

}
