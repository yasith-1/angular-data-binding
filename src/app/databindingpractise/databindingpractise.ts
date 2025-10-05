import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databindingpractise',
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './databindingpractise.html',
  styleUrl: './databindingpractise.css'
})
export class Databindingpractise {
  name: string = 'Kamal Silva';
  imageUrl: string = 'https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg';
  task: string = 'role';
  isActive: boolean = true;

  fontSize: string = '40px';

  valueSave: any = '';

  modelName: any = '';

  changeFontSize() {
    this.fontSize = '30px';
  }

  printData(value: any) {
    // console.log(value);
    this.valueSave = value;
  }

  state: boolean = true;

  customer: any[] = [
    {
      name: 'Amal',
      age: 25
    },
    {
      name: 'Kamal',
      age: 22
    },
    {
      name: 'Bimal',
      age: 30
    }
  ]
}
