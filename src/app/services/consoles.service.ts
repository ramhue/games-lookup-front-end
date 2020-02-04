import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { console } from '../models/console.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  constructor(private http:HttpClient) { }

  public GetAllConsoles(){
    return this.http.get<{[key:string]: console}>("http://localhost:3333/consoles/")
    .pipe(
      map( responseData =>{
        const consoleArray: console[] = [];
        for (const key in responseData){
          consoleArray.push({ ...responseData[key]});
        }
          return consoleArray;
      })
    )
  }
  public getbyname(name:string){
    return this.http.get<{[key:string] : console}>("http://localhost:3333/consoles/name/" + name)
    .pipe(
      map(
        responseData=>{
          const consoleArray: console[] =[];
          for ( const key in responseData){
            consoleArray.push({ ...responseData[key]});
          }
          return consoleArray;
        }
      )
    )
  }
  public getcurrentGenConsoles(){
    return this.http.get<{[key:string]:console}>("http://localhost:3333/consoles/new")
    .pipe(
      map(
        resp=>{
          const postArray: console[] = [];
          for( const key in resp){
            postArray.push({ ...resp[key]});
          }
          return postArray;
        }
      )
    )
  }

  public getSonyConsoles(){
    return this.http.get<{[key:string]:console}>("http://localhost:3333/consoles/publisher/3")
    .pipe(
      map(
        resp=>{
          const sonyArray: console[] =[];
          for(const key in resp){
            sonyArray.push({...resp[key]});
          }
          return sonyArray;
        }
      )
    )
  }

  public getnintendoConsoles(){
    return this.http.get<{[key:string]:console}>("http://localhost:3333/consoles/publisher/1")
    .pipe(
      map(
        resp=>{
          const nintendoArray: console[] =[];
          for(const key in resp){
            nintendoArray.push({...resp[key]});
          }
          return nintendoArray;
        }
      )
    )
  }
  
  public getMicrosoftConsoles(){
    return this.http.get<{[key:string]:console}>("http://localhost:3333/consoles/publisher/2")
    .pipe(
      map(
        resp=>{
          const microsoftArray: console[] =[];
          for(const key in resp){
            microsoftArray.push({...resp[key]});
          }
          return microsoftArray;
        }
      )
    )
  }
}
