import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-student',
  //template: '<h1>This is html file-app student<h1>',
  templateUrl:'./student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {
name:string='';
email:string='';
phone:number=1;
course:string='Angular-displayed using one way data binding(Interpolation)';
// display(){
//   this.course="Angular"
// }
}
