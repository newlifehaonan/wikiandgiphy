import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Term} from '../models/Term';
import {Subject} from 'rxjs';
import { giphy } from '../../environments/environment';

@Injectable()
export class HttpService {
  base: string;
  suffix: string;
  term: Subject<Term[]>;
  img: Subject<string[]>;

  constructor(private httpClient: HttpClient) {
    this.base = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
    this.suffix = '&origin=*&format=json&callback=?';
    this.term = new Subject<Term[]>();
    this.img = new Subject<string[]>();
  }


  searchWiki(keyword: string) {
    return this.httpClient.get(this.base + keyword + this.suffix, {
      responseType: 'text'
    });
  }
  searchGiphy(keyword: string) {
    return this.httpClient.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphy.apiKey}&q=${keyword}&limit=15&offset=0&rating=G&lang=en`);
  }
  addTerm(term: Term[]) {
    this.term.next(term);
  }
  addimg(img: string[]) {
    this.img.next(img);
  }

}
