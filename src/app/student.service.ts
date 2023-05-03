import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './Student';
import { ResponseViewModel } from './responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient: HttpClient) { }

  public getStudent(id:number): Observable<ResponseViewModel> {
    return this._httpClient.get<ResponseViewModel>('http://localhost:3000/students'+id);
  }

  public getAllStudents(): Observable<ResponseViewModel> {
    return this._httpClient.get<ResponseViewModel>('http://localhost:3000/students');
  }

  public addStudent(iStudent:IStudent) : void
  {this._httpClient.post('http://localhost:3000/students',iStudent);}

  public updateStudent(iStudent:IStudent):void
  {this._httpClient.put('http://localhost:3000/students'+iStudent.id,iStudent);}

  public deleteStudent(id:number):void
  {this._httpClient.delete('http://localhost:3000/students'+id);}
  
}
