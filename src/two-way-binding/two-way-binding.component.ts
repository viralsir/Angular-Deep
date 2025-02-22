import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {

  name:string="";
  maths:number=0;
  science:number=0;
  english:number=0;

  total:number=this.maths+this.science+this.english;



}
