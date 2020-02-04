import { Component, OnInit } from '@angular/core';
import {publishers} from 'src/app/models/publishers.model';
import { PublishersService} from 'src/app/services/publishers.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {

  constructor(private publishService: PublishersService ) {}
  publish:publishers[];
  ngOnInit() {
    this.getPublishers();
    console.log(this.publish);
  }

  private getPublishers(){
    this.publishService.getAllPublishers().subscribe(
      resp => {this.publish = resp; console.log(this.publish)},
      error => {console.log(error)},
    )

  }
}
