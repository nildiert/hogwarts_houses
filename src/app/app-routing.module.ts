import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { CharactersComponent } from './components/characters/characters.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'teachers', component: TeachersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
