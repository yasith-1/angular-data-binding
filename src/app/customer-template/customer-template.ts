import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-customer-template',
  imports: [RouterOutlet, CurrencyPipe],
  templateUrl: './customer-template.html',
  styleUrl: './customer-template.css'
})
export class CustomerTemplate {
  @Input() customer: any;
}
