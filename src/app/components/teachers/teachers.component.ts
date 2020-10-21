import { Component, OnInit } from '@angular/core';
import { Teacher } from "../../models/teacher";
import { TeachersService } from "../../services/teachers.service";


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [];

  constructor(public teacherService: TeachersService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers()
    .subscribe(
      teacher => {
        console.log(teacher),
          this.teachers = teacher;
      },
      err => console.log(err)
    )
  }

}