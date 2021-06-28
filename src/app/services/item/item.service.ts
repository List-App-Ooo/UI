import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  getItemDetails(uri: string): Observable<any> {
    return this.httpClient.get(`https://localhost:5010/api${uri}`);
  }

  createItem() {

  }

  deleteItem(id: string) {
    return this.httpClient.delete(`https://localhost:5010/api/item/${id}`);
  }
}
