import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListDetailsService {

  constructor(private httpClient:  HttpClient) { 
    
  }

  getListDetails(uri: string): Observable<any> {
    return this.httpClient.get(`https://localhost:5010/api${uri}`);
  }
}
