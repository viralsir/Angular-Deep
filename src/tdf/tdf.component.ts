import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdf',
  imports: [
    FormsModule
  ],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  studentlist:any=[];

  total:number=0
  save(StudentFormRef: NgForm)
  {
       //console.log(StudentFormRef.value);
       let student= StudentFormRef.value;
      // @ts-ignore
       this.studentlist.push(StudentFormRef.value);
       this.total=student.maths+student.science;
       StudentFormRef.reset();


  }
}
