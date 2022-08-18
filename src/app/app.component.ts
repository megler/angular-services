import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { Search } from './search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    console.log('searching');
    this.wikipedia.search(term).subscribe((res) => {
      this.pages = res;
    });
  }
}
