import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ListDetailsService } from './../services/list-details/list-details.service';
import { ListUI } from '../models/list-details.model';
import { Item } from '../models/item-details.model';

@Component({
  selector: 'app-list-details-page',
  templateUrl: './list-details-page.component.html',
  styleUrls: ['./list-details-page.component.css']
})
export class ListDetailsPageComponent implements OnInit {

  itemedList: ListUI;
  items: Item[];

  constructor(private service: ListDetailsService, private router: Router) {
    this.itemedList = {
      id: "",
      title: "",
      totalItems: 0,
      userId: "",
      items: []
    }

    this.items = [];
  }

  ngOnInit(): void {
    this.router.events.subscribe();
    this.getItemedList("ef6a7925-80a6-44bc-9e03-89bc7ca3586e");
  }

  getItemedList(id: string) {
    this.service.getListDetails(id).subscribe((res) => {
      this.itemedList = res;
      this.items = this.itemedList.items;
    });
  }

  toHomePage() {
    this.router.navigate([""])
  }
}
