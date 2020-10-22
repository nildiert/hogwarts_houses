import { Component, OnInit } from '@angular/core';
import { Character } from "../../models";
import { CharactersService } from 'src/app/services/characters.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  houses = ["slytherin", "gryffindor", "ravenclaw", "hufflepuf"]
  characters: Character[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'image', 'age'];
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

  getYears(dateOfBirth: string) {
    if(!dateOfBirth) return "---"
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

}


