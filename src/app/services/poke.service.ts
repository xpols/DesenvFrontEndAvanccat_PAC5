import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDTO } from '../models/pokemon.dto';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export interface ApiListResponse {
  count: number;
  next: string;
  previous: string;
  results: ApiListItemResponse[];
}

export interface ApiListItemResponse {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private urlApi: string;
  constructor(private http: HttpClient) { 
    this.urlApi = 'https://pokeapi.co/api/v2/pokemon/'
  }

  getPokeList(): Observable<ApiListItemResponse[]> {
    return this.http
      .get<ApiListResponse>(this.urlApi+"?offset=0&limit=20")
      .pipe(
        map(
          data => { 
            return data.results; 
          }
        )
      )
  }

  getPokemonByURL(url: string): Observable<PokemonDTO> {
    return this.http
      .get<PokemonDTO>(url);
  }

  getPokemonByName(name: string | null): Observable<PokemonDTO> {
    return this.http
      .get<PokemonDTO>(this.urlApi+name);
  }
}
