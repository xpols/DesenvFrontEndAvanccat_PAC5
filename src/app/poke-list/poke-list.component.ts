import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Router } from '@angular/router';

export interface PokeListItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  listPokes: PokeListItem[];

  displayedColumns: string[] = ['name', 'url'];

  type: string = 'list';

  loading: boolean = false;

  constructor(private pokeService:PokeService, private router: Router) { 
    this.listPokes = new Array<PokeListItem>();
  }

  ngOnInit(): void {
    this.loading = true;
    this.pokeService.getPokeList()
      .subscribe((pokes) => {
        console.log(pokes);
        this.listPokes = pokes;
        this.loading = false;
      });
  }

  onTypeChange(value:string) {
    this.type = value;
  }

  goToDetail(name: string): void {
    this.router.navigateByUrl('/detaill/' + name);
  }

}
