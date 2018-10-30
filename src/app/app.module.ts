import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingRoutingModule } from './app-routing/app-routing-routing.module';
import {FormsModule} from '@angular/forms';

import { dbconfig} from '../environments/environment';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchImgComponent } from './search-img/search-img.component';
import {HttpService} from './services/http.service';
import {DbService} from './services/db.service';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClientModule} from '@angular/common/http';
import {RetrieveHistoryService} from './services/retrieveHistory.service';





@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchHistoryComponent,
    SearchImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(dbconfig)
  ],
  providers: [HttpService, DbService, RetrieveHistoryService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
