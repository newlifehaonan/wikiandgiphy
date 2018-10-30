import {AngularFireDatabase } from '@angular/fire/database';
import {Injectable} from '@angular/core';
import {History} from '../models/history'

@Injectable()
export class DbService {
  constructor(private db: AngularFireDatabase ) {
  }
  onSaveDb(history: History) {
    this.db.database.ref('history/' + history.UserId).set(history);
  }
}
