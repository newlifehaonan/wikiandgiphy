import { Component } from '@angular/core';
import {HttpService} from './services/http.service';
import {Term} from './models/Term';
import {RetrieveHistoryService} from './services/retrieveHistory.service';
import { History } from './models/history';
import {uuid} from './utilities/uuid';
import {DbService} from './services/db.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikiandgiphy';
  searchText = '';
  terms: Term[] = [];
  searchHistory: History[] = [];
  imgurl: string[] = [];
  constructor(private http: HttpService, private historySevice: RetrieveHistoryService, private db: DbService) {
  }
  onSearchWiki() {
    this.terms = [];
    if (this.searchText === '') {
      console.log('no text input');
    } else {
      this.onCreateHistory(this.searchText, new Date().toLocaleTimeString());
      this.http.searchWiki(this.searchText).subscribe(
        (value) => {
          const data = JSON.parse(value.substring(5, value.length - 1));
          for ( let i = 0; i < data[1].length; i++) {
            const term = new Term();
            term.keyword = data[0];
            term.Title = data[1][i];
            term.Description = data[2][i];
            term.url = data[3][i];
            this.terms.push(term);
          }
          this.http.addTerm(this.terms);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  onShowHistory() {
    this.historySevice.addHistory(this.searchHistory);
  }
  onSearchGiphy() {
    this.imgurl = [];
    if (this.searchText === '') {
      console.log('no text input');
    } else  {
      this.http.searchGiphy(this.searchText)
        .map(
          value => {
            return value['data'];
          }
        )
        .subscribe(
        (item) => {
          item.forEach(
            (prop) => {
              this.imgurl.push(prop['images']['fixed_height_downsampled']['url']);
            }
          );
        }
      );
      this.http.addimg(this.imgurl);
      // console.log(this.imgurl);
    }
  }
  private onCreateHistory(keyword: string, timestamp: string) {
    const searchHistory = new History();
    searchHistory.createAt = timestamp;
    searchHistory.searchText = keyword;
    searchHistory.UserId = uuid();
    this.db.onSaveDb(searchHistory);
    this.searchHistory.push(searchHistory);
  }
}
