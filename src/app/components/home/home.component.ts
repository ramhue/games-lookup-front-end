import { Component, OnInit } from '@angular/core';
import { ConsolesService } from 'src/app/services/consoles.service'
import { console } from 'src/app/models/console.model';
import {masterList} from 'src/app/models/masterList.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private consoleService:ConsolesService) { }
  currentGen:console[];
  SonyCons:console[];
  MicroCons:console[];
  NintendoCons: console[];




  ngOnInit() {
    this.getCurrConsole();
    this.getSonyConsoles();
    this.getMicroConsoles();
    this.getNintendoConsoles();

  }
  getCurrConsole(){
    this.consoleService.getcurrentGenConsoles().subscribe(
      resp=> {this.currentGen = resp;
      }
    )
  }
  getSonyConsoles(){
    this.consoleService.getSonyConsoles().subscribe(
      resp=>{this.SonyCons = resp;}
    )
  }
  getNintendoConsoles(){
    this.consoleService.getnintendoConsoles().subscribe(
      resp =>{this.NintendoCons = resp;}
    )
  }
  getMicroConsoles(){
    this.consoleService.getMicrosoftConsoles().subscribe(
      resp=>{this.MicroCons = resp;}
    )
  }
}
