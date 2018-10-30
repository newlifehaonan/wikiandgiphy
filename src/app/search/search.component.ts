import {Component, OnInit, OnDestroy } from '@angular/core';
import {HttpService} from '../services/http.service';
import {Subscription} from 'rxjs';
import {Term} from '../models/Term';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  terms: Term[] = [];
  constructor(private  http: HttpService) {
  }

  ngOnInit() {
    this.subscription = this.http.term.subscribe(
      (terms: Term[]) => {
        console.log('this is from subscription');
        this.terms = terms;
        console.log(this.terms);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
