import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { PokemonDTO } from '../models/pokemon.dto';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  @Input() url = '';
  pokemon: PokemonDTO = new PokemonDTO('0', '', 0, 0, 0, [], '', []);
  constructor(private pokeService:PokeService) { }

  ngOnInit(): void {
    this.pokeService.getPokemonByURL(this.url).subscribe((pokeInfo) => {
      console.log(pokeInfo);
      console.log(pokeInfo.forms[0].name);
      this.pokemon = pokeInfo;
    });
  }

}
