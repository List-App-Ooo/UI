import { List } from './../../models/list.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lists: List[] = [
    {
      id: "List #1 id",
      title: "List #1 title",
      totalItems: 3,
      userId: "User 1"
    },
    {
      id: "List #2 id",
      title: "List #2 title",
      totalItems: 3,
      userId: "User 1"
    }
  ]

  constructor() { 
    
  }

  getLists(id: string): List[] {
    var userLists: List[] = [];
    this.lists.forEach(list => {
      if (list.userId == id) {
        userLists.push(list);
      }
    });
    return userLists;
  }

  createList() {

  }
}
