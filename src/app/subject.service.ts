import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ISubject } from './Subject';
import { ISubject } from './Subject';
import { ResponseViewModel } from './responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class ISubjectService {

  constructor(private _httpClient: HttpClient) { }

  
  public getSubject(id:number): Observable<ResponseViewModel> {
    return this._httpClient.get<ResponseViewModel>('http://localhost:3000/Subjects'+id);
  }

  public getAllSubjects(): Observable<ResponseViewModel> {
    return this._httpClient.get<ResponseViewModel>('http://localhost:3000/Subjects');
  }

  public addSubject(ISubject:ISubject) : void
  {this._httpClient.post('http://localhost:3000/Subjects',ISubject);}

  public updateSubject(ISubject:ISubject):void
  {this._httpClient.put('http://localhost:3000/Subjects'+ISubject.id,ISubject);}

  public deleteSubject(id:number):void
  {this._httpClient.delete('http://localhost:3000/Subjects'+id);}
 
  
}
