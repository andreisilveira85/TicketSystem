import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './review.component.html',
})

export class ReviewComponent {
  formSubmitted = false;

  onSubmit() {
    this.formSubmitted = true;
    
    setTimeout(() => {
      this.formSubmitted = false;
    }, 5000);
  }

  rating: number = 0;

  setRating(star: number): void {
    this.rating = star;
  }
}
