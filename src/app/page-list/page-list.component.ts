import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../search';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: Search[] = [];
  url: string = 'https://en.wikipedia.org?curid=';

  constructor() {}

  ngOnInit(): void {}
}
