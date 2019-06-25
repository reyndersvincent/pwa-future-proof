import { PokeService } from './../../../services/pokeservice';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon.container.html',
  styleUrls: ['./pokemon.container.css']
})
export class PokemonContainer {
  private pokemons: any[];

  constructor(private pokeService: PokeService) {
    this.pokemons = [];
    pokeService.getPokemons().subscribe();
  }
}
