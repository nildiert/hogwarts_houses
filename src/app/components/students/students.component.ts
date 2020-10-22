import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Student } from "../../models/student";
import { StudentsService } from "../../services/students.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  name = new FormControl('');
  patronus = new FormControl('');
  image = new FormControl('');

  students: Student[] = [];
  newStudents: Student[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'image'];

  new_student: Student = {}

  constructor(public studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentService.getStudents()
    .subscribe(
      students => {
        this.students = students;
        console.log(students)
      },
      err => console.log(err)
      )
  }

  addStudent() {
    let newStudent = {} as Student;
    newStudent.name = this.name.value;
    newStudent.patronus = this.patronus.value;
    newStudent.image = this.image.value;


    this.studentService.getStudents()
    .subscribe(students => {
      this.students = students;
      this.students.concat(this.newStudents);
      console.log(this.students)
    })
  }

}
