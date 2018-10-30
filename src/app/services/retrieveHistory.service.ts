import {Subject} from 'rxjs';
import { History } from '../models/history';

export class RetrieveHistoryService {
  histories: Subject<History[]>;
  constructor() {
   this.histories = new Subject<History[]>();
  }
  addHistory(history: History[]) {
    this.histories.next(history);
  }
}

