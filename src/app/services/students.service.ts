import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get<Student[]>('http://hp-api.herokuapp.com/api/characters/students');
  }
}

