import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../Student';
import { ISubject } from '../Subject';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  
  public students: IStudent[] =[];
  public student!: IStudent ;
  constructor(private _studentsService: StudentService) { }



  ngOnInit() {
    this._studentsService
      .getAllStudents().subscribe(response=>{
        this.students=response.data;
      })
     
  }

  allStudentsDiv:boolean=true;
  studentsDiv:boolean=true;
  showStudents()
  {
    if(this.allStudentsDiv==true)
    this.allStudentsDiv=false;
    else
    this.allStudentsDiv=true;

    
  }
  showStudent()
  {
    if(this.studentsDiv==true)
    this.studentsDiv=false;
    else
    this.studentsDiv=true;
  }

  addDiv:boolean=true;
  addStudent()
  {
    if(this.addDiv==true)
    this.addDiv=false;
    else
    this.addDiv=true;
  }

  updateDiv:boolean=true;
  updateStudent()
  {
    if(this.updateDiv==true)
    this.updateDiv=false;
    else
    this.updateDiv=true;
  }

  deleteDiv:boolean=true;
  deleteStudent()
  {
    if(this.deleteDiv==true)
    this.deleteDiv=false;
    else
    this.deleteDiv=true;
  }

  getStudentById(id:string) :void
  {
    var id2=Number(id); 
    this._studentsService.getStudent(id2).subscribe(
      response=>{
        this.student=response.data;
      }
    );
    
  }
  addNewStudent(fristName:string,middleName:string,lastName:string) : void
  {
    this.student.firstName=fristName;
    this.student.middleName=middleName;
    this.student.lastName=lastName;

    this._studentsService.addStudent(this.student);

  }

  updateStudentById(fristName:string,middleName:string,lastName:string,id:string):void
  {
    var id2=Number(id); 
    this.student.firstName=fristName;
    this.student.middleName=middleName;
    this.student.lastName=lastName;
    this.student.id=id2;

    this._studentsService.updateStudent(this.student);
  }

  deleteStudentById(id:string)
  {
    var id2=Number(id); 
    this._studentsService.deleteStudent(id2);
  }
}



