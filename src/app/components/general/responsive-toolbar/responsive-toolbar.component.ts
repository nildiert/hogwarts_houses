import { Component, OnInit } from '@angular/core';
import { MenuItem } from "../../../models/menu-item";

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Personajes',
      icon: 'rowing',
      link: '/characters'
    },
    {
      label: 'Estudiantes',
      icon: 'book',
      link: '/students'
    },
    {
      label: 'Profesores',
      icon: 'groups',
      link: '/teachers'
    },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
