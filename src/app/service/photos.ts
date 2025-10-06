import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class Photos {
  baseURL: string = environment.url;

  constructor(private http: HttpClient) { }

  // using single quotes and template literals
  findAllPhotos(): Observable<any> {
    return this.http.get(this.baseURL + '/photos');
  }

  // using backticks and template literals
  findAllComments(): Observable<any> {
    return this.http.get(`${this.baseURL}/comments`);
  }
}
