import { Component, OnInit } from '@angular/core';
import { ConsolesService } from 'src/app/services/consoles.service';
import {console} from 'src/app/models/console.model';
@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: [ './consoles.component.css']
})
export class ConsolesComponent implements OnInit {

  constructor(private consoleService: ConsolesService) {}
  consoles:console[];
  ngOnInit() {
    this.getConsoles();
  }
  private  getConsoles(){
    this.consoleService.GetAllConsoles().subscribe(
      resp => {this.consoles = resp},
      error => {console.log(error)},
    );
  }
}
