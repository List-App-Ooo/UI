import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListService } from './../services/list/list.service';
import { List } from './../models/list.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  lists: List[]
  
  constructor(private readonly listService: ListService, private router: Router) {
    this.lists = [];
  }

  ngOnInit(): void {
    this.router.events.subscribe();
    this.getLists("00000000-0000-0000-0000-000000000000");
  }

  getLists(id: string) {
    this.listService.getLists(id).subscribe((res) => {
      this.lists = res;
    });
  }
}
