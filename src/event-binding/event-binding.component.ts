import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent
{

  rollno:number=0;
  Name:string="";
  Maths:number=0;
  Science:number=0;
  English:number=0;
  Total:number=0;
  error_msg:string="";

  save(rno: HTMLInputElement, name: HTMLInputElement, maths: HTMLInputElement, science: HTMLInputElement, english: HTMLInputElement)
  {

      this.rollno=  parseInt(rno.value);
      this.Name=name.value;
      this.Maths= parseInt(maths.value);
      this.Science=parseInt(science.value);
      this.English=parseInt(english.value);
      this.Total=this.Maths+this.Science+this.English;

       if(this.rollno<0){
         rno.style.color = "red";
         this.rollno=0;
         this.error_msg="invalid rollno"
     }
    else{
       rno.value="";
       rno.style.color = "black";
       this.error_msg="";
     }



  }
}
