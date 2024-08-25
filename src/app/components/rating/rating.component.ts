import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../service/rating.service';  
import { RatingModel } from '../../models/rating.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';  

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',  
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule]
})
export class RatingComponent implements OnInit {
  ratings: RatingModel[] = [];
  p: number = 1;  
  itemsPerPage: number = 3;  

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    this.getAllRatings();
  }

  getAllRatings(): void {
    this.ratingService.getAllRatings().subscribe(
      (ratings) => {
        this.ratings = ratings;
        console.log('Ratings recebidos:', this.ratings);
      },
      (error) => {
        console.error('Erro ao buscar ratings:', error);
      }
    );
  }
}
