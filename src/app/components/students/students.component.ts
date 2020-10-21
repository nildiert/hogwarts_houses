import { Component, OnInit } from '@angular/core';
import { Student } from "../../models/student";
import { StudentsService } from "../../services/students.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  displayedColumns: string[] = ['name', 'patronus', 'image'];

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

}
