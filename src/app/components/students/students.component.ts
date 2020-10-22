import { Component, OnInit } from '@angular/core';


import { FormControl } from "@angular/forms";
import { Student } from "../../models";
import { StudentsService } from "../../services/students.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  name = '';
  patronus = '';
  image = '';

  students: Student[] = [];
  newStudents: Student[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'image', 'age'];

  new_student: Student = {}

  constructor(public studentService: StudentsService) {
  }
  resetForms() {
    this.name = '';
    this.patronus = '';
    this.image = '';
  }
  ngOnInit(): void {
    this.studentService.getStudents()
      .subscribe(
        students => {
          this.students = students;
        },
        err => console.log(err)
      )
  }

  addStudent() {
    const { name, patronus, image } = this;
    this.students = [...this.students, { name, patronus, image }]
    this.resetForms();
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
