import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Teacher } from "../models/teacher";

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }

  getTeachers() {
    return this.http.get<Teacher[]>('http://hp-api.herokuapp.com/api/characters/staff');
  }
}
