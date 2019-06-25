import Axios from 'axios';
import { from, of } from 'rxjs';
import { switchMap, mergeMap, toArray, map } from 'rxjs/operators';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/.netlify/functions/pokeapi' : 'https://pokeapi.co/api/v2';
const PAGE_SIZE = 10;

class PokeService {
  constructor() {
      this.http = Axios.create({
        baseURL: BASE_URL
      });
      this.http.interceptors.response.use(response => response.data);
  }

  getPokemons(page = 0) {
    return from(this.http.get(`pokemon?limit=${PAGE_SIZE}&offset=${page * 10}`))
      .pipe(map(response => response.results))
      .pipe(switchMap(pokemons => of(...pokemons)))
      .pipe(mergeMap(pokemon => this.getPokemon(pokemon.name)))
      .pipe(toArray())
      .toPromise();
  }

  getPokemon(id) {
    return this.http.get(`pokemon/${id}`);
  }
}

export default new PokeService();