import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-img',
  templateUrl: './search-img.component.html',
  styleUrls: ['./search-img.component.css']
})
export class SearchImgComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  imgUrls: string[] = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.subscription = this.http.img.subscribe(
      (imgUrls: string[]) => {
        console.log('this is from component');
        this.imgUrls = imgUrls;
        console.log(this.imgUrls);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
