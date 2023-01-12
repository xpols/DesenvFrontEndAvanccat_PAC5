import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeService } from '../services/poke.service';
import { PokemonDTO } from '../models/pokemon.dto';

@Component({
  selector: 'app-poke-detaill',
  templateUrl: './poke-detaill.component.html',
  styleUrls: ['./poke-detaill.component.css']
})
export class PokeDetaillComponent implements OnInit {

  pokeName: string | null= '';
  pokemon: PokemonDTO = new PokemonDTO('0', '', 0, 0, 0, [], '', []);
  showDetaills: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private pokeService:PokeService, private router: Router) { 
    this.pokeName = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.pokeService.getPokemonByName(this.pokeName).subscribe((pokeInfo) => {
      console.log(pokeInfo);
      console.log(pokeInfo.forms[0].name);
      this.pokemon = pokeInfo;
    });
  }

  goHome(): void {
    this.router.navigateByUrl('/');
  }

  showDetaillsFn(): void {
    this.showDetaills = true;
  }

}
