
export class History {
  private _UserId: string;
  private _searchText: string;
  private _createAt: string;

  constructor() {
  }

  get UserId(): string {
    return this._UserId;
  }

  get searchText(): string {
    return this._searchText;
  }

  get createAt(): string {
    return this._createAt;
  }

  set UserId(value: string) {
    this._UserId = value;
  }

  set searchText(value: string) {
    this._searchText = value;
  }

  set createAt(value: string) {
    this._createAt = value;
  }
}
