import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from "../search-bar/search-bar";

@Component({
  selector: 'app-services',
  imports: [RouterOutlet, SearchBar],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  searchText: string = '';
  
  setSearchText(text: string) {
    this.searchText = text;
  }
}
