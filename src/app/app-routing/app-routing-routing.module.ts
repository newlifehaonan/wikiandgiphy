import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from '../search/search.component';
import {SearchHistoryComponent} from '../search-history/search-history.component';
import {SearchImgComponent} from '../search-img/search-img.component';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'searchImg', component: SearchImgComponent},
  {path: 'searchHistory', component: SearchHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
