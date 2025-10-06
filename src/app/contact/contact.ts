import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { Photos } from "../service/photos";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
  imports: [RouterOutlet, NgFor]
})

export class Contact {

  photoList:any[]=[];
  commentList:any[]=[];
  constructor(private service: Photos) { }

  load() {
    // Add code to load data here
    this.loadAllPhotos();
    this.loadAllComments();
  }

  loadAllPhotos() {
    this.service.findAllPhotos().subscribe(response => {
      this.photoList =response;
      // console.log('Photos:', response);
    });
  }

  loadAllComments() {
    this.service.findAllComments().subscribe(response => {
      this.commentList=response;
      // console.log('comments:', response);
    });
  }
}