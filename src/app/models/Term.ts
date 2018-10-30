export class Term {

  private _keyword: string;
  private _Title: string;
  private _Description: string;
  private _url: string;
  constructor() {
  }

  set keyword(value: string) {
    this._keyword = value;
  }

  set Title(value: string) {
    this._Title = value;
  }

  set Description(value: string) {
    this._Description = value;
  }

  set url(value: string) {
    this._url = value;
  }

  get keyword(): string {
    return this._keyword;
  }

  get Title(): string {
    return this._Title;
  }

  get Description(): string {
    return this._Description;
  }

  get url(): string {
    return this._url;
  }
}
