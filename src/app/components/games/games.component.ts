import { Component, OnInit, ɵConsole } from '@angular/core';
import { GamesService } from "src/app/services/games.service";
import { game } from "src/app/models/games.model";
import { error } from 'util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ConsolesService } from 'src/app/services/consoles.service';
import { console } from 'src/app/models/console.model';
import {PublishersService} from 'src/app/services/publishers.service';
import { publishers } from 'src/app/models/publishers.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor( private pubService:PublishersService,private gamesService: GamesService, private consoleService:ConsolesService) { }
  cons:console[];
  games:game[];
  pubs:publishers[];
  onfirstpage:boolean = true;
  onlastpage:boolean = false;
  page:number = 1;
  items:Number =16;
  consoleName:String = "all";
  publish:String = "all";

  numOfRecords:number;
  

  ngOnInit() {
    this.getpublisherslist();
    this.getConsoleGame();
    this.getConsoles();

  }
  getConsoles(){
    this.consoleService.GetAllConsoles().subscribe(
      responseData=>{this.cons = responseData},
      error=> console.log(error)
    )
  }
  getgamesbypublishers(){
    this.gamesService
  }
  getpublisherslist(){
    this.pubService.getAllPublishers().subscribe(
      resp=>{this.pubs = resp;console.log(this.pubs);}
    )
  }
  getGames(){
    this.gamesService.getAllGames(this.page,this.items).subscribe(
      resp => {this.games = resp; this.numOfRecords = this.games.length;this.isOnLastPage();},
      error=> { console.log(error)},
    )
  }

  nextPage(){
    this.page = this.page + 1;
    this.onfirstpage = false;
    this.ngOnInit();
  }
  previousPage(){
    this.onlastpage = false;
    if(this.page == 1){
      this.onfirstpage = true;
    }
    else{
      this.page = this.page -1;
      this.isOnfirstPage();
      this.ngOnInit();
    }
  }
  changeConsole(c:String){
    this.consoleName = c;
    this.getConsoleGame();
  }
  changePublisher(p:String){
    this.publish = p;
    this.consoleName = "all";
    this.page = 1;
    this.onfirstpage = true;
    if(p === "all"){
      this.getGames();
    }
    else{
    this.getPublishGame();
    }
  }
  isOnfirstPage(){
    if (this.page ==1){
      this.onfirstpage = true;
    }
  }
  isOnLastPage(){
    if (this.numOfRecords < this.items ){
      this.onlastpage = true;
    }
    else{
      this.onlastpage = false;
  }
  console.log(this.onlastpage);
  console.log(this.games.length); 
}
  getConsoleGame(){
    if(this.consoleName ==="all"){
      this.getGames();
    }
    else{
        this.gamesService.getGamesByConsole(this.consoleName).subscribe(
          resp=>{this.games = resp;}
        )
      }
  }
  getPublishGame(){
    this.gamesService.getGamesByPublisher(this.publish).subscribe(
      resp=>{this.games = resp; console.log(this.games)}
    )
  }
}