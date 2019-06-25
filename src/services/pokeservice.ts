import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { switchMap, mergeMap, toArray, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const PAGE_SIZE = 10;

class Pokemon {
  constructor(public name: string){}
}

@Injectable()
export class PokeService {
  constructor(private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string) {}

  public getPokemons(page = 0) {
    return this.http.get<{results: Pokemon[]}>(`${this.baseUrl}/pokemon?limit=${PAGE_SIZE}&offset=${page}`)
      .pipe(map(response => response.results))
      .pipe(switchMap(pokemons => of(...pokemons)))
      .pipe(mergeMap((pokemon: Pokemon) => this.getPokemon(pokemon.name)))
      .pipe(toArray())
  }

  public getPokemon(name: string) {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`);
  }
}