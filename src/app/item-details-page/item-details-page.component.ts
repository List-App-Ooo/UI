import { ItemService } from '../services/item/item.service';
import { Item } from '../models/item.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details-page',
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.css']
})
export class ItemDetailsPageComponent implements OnInit {

  item: Item;
  uri: string;

  constructor(private itemService: ItemService, private router: Router) {
    this.item = {
      id: "",
      title: "",
      desc: "",
      timeStamp: 0,
      listId: ""
    }

    this.uri = "";
  }

  ngOnInit(): void {
    this.router.events.subscribe();
    this.uri = this.router.url;
    this.getItemDetails(this.uri);
  }

  getItemDetails(uri: string) {
    this.itemService.getItemDetails(uri).subscribe((res) => {
      this.item = res;
    });
  }
}
