export class PokemonDTO {
    id!: string;
    name: string;
    height: number;
    order: number;
    weight: number;
    forms: any[];
    sprites: any;
    types: any[];
  
    constructor(id: string, name: string, height: number, order: number, weight: number, forms: any[], sprites: any, types: any[]) {
      this.id = id;
      this.name = name;
      this.height = height;
      this.order = order;
      this.weight = weight;
      this.forms = forms;
      this.sprites = sprites;
      this.types = types;
    }
  }