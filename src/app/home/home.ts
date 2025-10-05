import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
