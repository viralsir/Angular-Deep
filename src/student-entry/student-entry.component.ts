import {Component, inject} from '@angular/core';
import {StudentModel} from '../Model/student-model';
import {FormsModule} from '@angular/forms';
import {StudentService} from '../Service/student.service';

@Component({
  selector: 'app-student-entry',
  imports: [
    FormsModule
  ],
  templateUrl: './student-entry.component.html',
  styleUrl: './student-entry.component.css'
})
export class StudentEntryComponent {


  rollno:number=0;
  name:string="";



 // studentservice1: StudentService = inject(StudentService);


   constructor(public studentservice: StudentService) {

   }


  save() {
  let studentModel: StudentModel = new StudentModel();
   studentModel.name = this.name;
   studentModel.rollno = this.rollno;

    this.studentservice.studentlist.push(studentModel);

  }
}
