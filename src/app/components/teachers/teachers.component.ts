import { Component, OnInit } from '@angular/core';
import { Teacher } from "../../models/teacher";
import { TeachersService } from "../../services/teachers.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'image'];


  constructor(public teacherService: TeachersService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers()
    .subscribe(
      teacher => {
          this.teachers = teacher;
      },
      err => console.log(err)
    )
  }

  getYears(dateOfBirth: string) {
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