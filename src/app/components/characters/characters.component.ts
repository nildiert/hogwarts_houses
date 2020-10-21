import { Component, OnInit } from '@angular/core';
import { Character } from "../../models/character";
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  houses = ["slytherin", "gryffindor", "ravenclaw", "hufflepuf"]
  characters: Character[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'image'];
  constructor(public characterService: CharactersService) { }

  ngOnInit(): void {
  }

  selectedHouse = this.houses[0]

  selectHouse(house: string) {
    this.characterService.getCharacters(house)
    .subscribe(
      characters => {
        this.characters = characters
      }
    )
  }

}


