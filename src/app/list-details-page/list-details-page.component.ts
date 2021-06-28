import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ListService } from './../services/list/list.service';
import { ItemService } from '../services/item/item.service';
import { ItemedList } from '../models/itemed-list.model';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-list-details-page',
  templateUrl: './list-details-page.component.html',
  styleUrls: ['./list-details-page.component.css']
})
export class ListDetailsPageComponent implements OnInit {

  itemedList: ItemedList;
  items: Item[];
  uri: string;

  constructor(private listService: ListService, private itemService: ItemService, private router: Router) {
    this.itemedList = {
      id: "",
      title: "",
      totalItems: 0,
      userId: "",
      items: []
    }

    this.items = [];

    this.uri = "";
  }

  ngOnInit(): void {
    this.router.events.subscribe();
    this.uri = this.router.url;
    this.getItems(this.uri);
  }

  getItems(id: string) {
    this.listService.getItemedList(id).subscribe((res) => {
      this.itemedList = res;
      this.items = this.itemedList.items;
    });
  }

  deleteItem(id: string) {
    this.itemService.deleteItem(id).subscribe((res) => {
      // console.log(res);
      this.getItems(this.uri);
    });
  }

  reloadPage(id: string) {
    this.router.navigateByUrl('redirect', {skipLocationChange: true}).then(()=>
    this.router.navigate(["list/{id}"]));
  }

  toHomePage() {
    this.router.navigate([""])
  }
}
