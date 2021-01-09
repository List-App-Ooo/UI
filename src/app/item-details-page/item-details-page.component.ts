import { ListDetailsService } from './../services/list-details/list-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details-page',
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.css']
})
export class ItemDetailsPageComponent implements OnInit {

  constructor(private service: ListDetailsService) {
    
   }

  ngOnInit(): void {
  }

}
