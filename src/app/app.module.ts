import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListDetailsPageComponent } from './list-details-page/list-details-page.component';
import { ItemDetailsPageComponent } from './item-details-page/item-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListDetailsPageComponent,
    ItemDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
