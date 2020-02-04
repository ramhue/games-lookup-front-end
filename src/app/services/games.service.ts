import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { game } from "src/app/models/games.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  getAllGames( page:Number, items: Number ){
    return this.http.get<{[key:string]:game}>("http://localhost:3333/games/page/" + page + "/items/"+ items + "/")
    .pipe(map(
      responseData=>{
        const gamesArray:game[]=[];
        for(const key in responseData){
          gamesArray.push({ ...responseData[key]});
        }
        return gamesArray;
      }
    ))
  }

  getGamesByPublisher(name:String){
    return this.http.get<{[key:string]:game}>("http://localhost:3333/games/publishers/" + name)
    .pipe(map(
      responseData=>{const gamesArray:game[] = []
                     for(const key in responseData){
                       gamesArray.push({ ...responseData[key]});
                     } 
                     return gamesArray;
      }
    ))
  }

  getGamesByConsole( name:String){
    return this.http.get<{[key:string]:game}>("http://localhost:3333/games/consoles/" +name)
    .pipe(map(
      resp=>{const gamesArray:game[]=[];
             for(const key in resp){
               gamesArray.push({ ...resp[key]});
             }
             return gamesArray;
            }
            )
        )
  }
}
