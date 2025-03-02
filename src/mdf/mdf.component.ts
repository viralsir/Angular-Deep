import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mdf',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.css'
})
export class MdfComponent {

  StudentForm=new FormGroup({
    rollno:new FormControl('',[Validators.required]),
    name: new FormControl('',Validators.minLength(3)),
    maths: new FormControl(''),
    science: new FormControl('')
  })

  StudentList:any=[]

  save()
  {

      this.StudentList.push(this.StudentForm.value);
      this.StudentForm.reset();

  }



}
