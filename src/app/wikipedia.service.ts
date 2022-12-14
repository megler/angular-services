import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pages } from './pages';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    const params = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('list', 'search')
      .set('utf8', '1')
      .set('srsearch', term)
      .set('origin', '*');

    return this.http
      .get<Pages>('https://en.wikipedia.org/w/api.php', {
        params,
      })
      .pipe(map((x) => x.query.search));
  }
}
