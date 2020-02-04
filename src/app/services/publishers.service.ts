import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publishers } from '../models/publishers.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublishersService {

  constructor(private http:HttpClient) { }

  public getAllPublishers(){
    return this.http.get<{[key:string]: publishers}>("http://localhost:3333/publishers/")
    .pipe(
      map(
        responseData =>{
          const publishArray: publishers[] = [];
          for(const key in responseData){
            publishArray.push({ ...responseData[key]});
          }
          return publishArray;
        }
      )
    )
  }
}
