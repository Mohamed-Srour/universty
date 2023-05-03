import { Component, OnInit } from '@angular/core';
import { ISubject } from '../Subject';
import { ISubjectService } from '../subject.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  public subjects: ISubject[]=[];
  public subject!:ISubject;
  constructor(private _subjectService:ISubjectService){}

  ngOnInit(){
      this._subjectService
      .getAllSubjects()
      .subscribe(response=>{
        this.subjects=response.data;
      })
  }

  allsubjectsDiv:boolean=true;
  showSubjects()
  {
    if(this.allsubjectsDiv==true)
    this.allsubjectsDiv=false;
    else
    this.allsubjectsDiv=true;
  }
  subjectsDiv:boolean=true
  showsubject()
  {
    if(this.subjectsDiv==true)
    this.subjectsDiv=false;
    else
    this.subjectsDiv=true;
  }
  addDiv:boolean=true;
  addsubject()
  {
    if(this.addDiv==true)
    this.addDiv=false;
    else
    this.addDiv=true;
  }

  updateDiv:boolean=true;
  updatesubject()
  {
    if(this.updateDiv==true)
    this.updateDiv=false;
    else
    this.updateDiv=true;
  }

  deleteDiv:boolean=true;
  deletesubject()
  {
    if(this.deleteDiv==true)
    this.deleteDiv=false;
    else
    this.deleteDiv=true;
  }

  getsubjectById(id:string):void
  {
    var id2=Number(id);
    this._subjectService.getSubject(id2).subscribe(
      response=>{
        this.subject=response.data;
      }
    )
  }
  addNewsubject(fristName:string,id:string):void
  {
    var id2=Number(id);
    this.subject.id=id2;

    this._subjectService.addSubject(this.subject);
  }
  updatesubjectById(firstName:string,id:string)
  {
    var id2= Number(id);
    this.subject.id=id2;
    this.subject.name=firstName;

    this._subjectService.updateSubject(this.subject);
  }
  deletesubjectById(id:string)
  {
    var id2=Number(id);
    this._subjectService.deleteSubject(id2);
  }
}
