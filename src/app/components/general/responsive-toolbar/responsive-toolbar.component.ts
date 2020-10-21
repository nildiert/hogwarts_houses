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
      // showOnMobile: true
    },
    {
      label: 'Estudiantes',
      icon: 'book'
    },
    {
      label: 'Profesores',
      icon: 'groups'
    },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
