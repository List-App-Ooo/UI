import { ListService } from './../services/list/list.service';
import { List } from './../models/list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  lists: List[]
  
  constructor(private readonly service: ListService) {
    this.lists = [];
   }

  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.lists = this.service.getLists("User 1");
  }

}
