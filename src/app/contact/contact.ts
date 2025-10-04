import { Component } from "@angular/core";
import { Developer } from "../developer/developer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
  imports: [Developer, RouterOutlet]
})

export class Contact {

}