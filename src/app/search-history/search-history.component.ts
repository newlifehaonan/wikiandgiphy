import {Component, OnDestroy, OnInit} from '@angular/core';
import {RetrieveHistoryService} from '../services/retrieveHistory.service';
import {History} from '../models/history';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit, OnDestroy{

  searchHistories: History[] = [];
  private subscription: Subscription;

  constructor(private historyService: RetrieveHistoryService) {}

  ngOnInit() {
    this.subscription = this.historyService.histories.subscribe(
      (result: History[]) => {
        console.log('this is from history');
        console.log(result);
        this.searchHistories = result;
        console.log(this.searchHistories);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
