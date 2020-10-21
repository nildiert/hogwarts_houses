import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character } from "../models/character";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(house: string) {
    return this.http.get<Character[]>(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
  }

}
