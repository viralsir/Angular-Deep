import { Injectable } from '@angular/core';
import {StudentModel} from '../Model/student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService
{

   public studentlist:Array<StudentModel>=[]

  constructor() { }
}
