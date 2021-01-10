import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private httpClient:  HttpClient) { 
    
  }

  getLists(id: string): Observable<any> {
    return this.httpClient.get(`https://localhost:5010/api/list/user/${id}`);
  }

  createList() {

  }
}
