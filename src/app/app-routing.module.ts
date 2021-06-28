import { RedirectComponent } from './redirect/redirect.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDetailsPageComponent } from './item-details-page/item-details-page.component';
import { ListDetailsPageComponent } from './list-details-page/list-details-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { component: HomePageComponent, path: '' },
  { component: ListDetailsPageComponent, path: 'list/:id' },
  { component: ItemDetailsPageComponent, path: 'item/:id' },
  { component: RedirectComponent, path: 'redirect' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
