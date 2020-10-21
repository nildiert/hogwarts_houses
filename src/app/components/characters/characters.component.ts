import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  houses = ["slytherin", "gryffindor", "ravenclaw", "hufflepuf"]
  constructor() { }

  ngOnInit(): void {
  }

  selectedHouse = this.houses[0]

  selectHouse(house: string) {
    console.log(house);
    // console.log(this.selectedHouse)
  }

}
