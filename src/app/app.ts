import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home } from "./home/home";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, FormsModule, Home],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
}
