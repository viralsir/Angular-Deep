export class StudentModel
{
     private _rollno: number=0;
     private _name: string="";


  // constructor(rollno: number, name: string) {
  //   this._rollno = rollno;
  //   this._name = name;
  // }


  get rollno(): number {
    return this._rollno;
  }

  set rollno(value: number) {
    this._rollno = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
