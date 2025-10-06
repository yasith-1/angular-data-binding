import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  @Output() searchEmmitter: EventEmitter<any> = new EventEmitter<any>();
  search(searchTerm: any) {
    this.searchEmmitter.emit(searchTerm);
  }
}
