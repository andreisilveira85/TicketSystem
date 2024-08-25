import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RatingModel } from '../models/rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private apiUrl = 'http://localhost:8080/ratings';  
  
  constructor(private http: HttpClient) { }

  getAllRatings(): Observable<RatingModel[]> {
    return this.http.get<RatingModel[]>(this.apiUrl);
  }
}

