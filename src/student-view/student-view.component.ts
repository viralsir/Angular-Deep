import {Component, inject} from '@angular/core';
import {StudentService} from '../Service/student.service';

@Component({
  selector: 'app-student-view',
  imports: [],
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css'
})
export class StudentViewComponent {


  studentservice: StudentService=inject(StudentService);


}
