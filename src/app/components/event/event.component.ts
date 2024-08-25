import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { EventModel } from '../../models/event.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';  

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxPaginationModule], 
  templateUrl: './event.component.html'
})

export class EventComponent implements OnInit {
  events: EventModel[] = [];
  p: number = 1;  
  hasMore: boolean = true;
  filters: any = {
    name: '',
    category: '',
    startTimeAfter: '',
    startTimeBefore: ''
  };  

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.getEvents(); 
  }

  
  getEvents(page: number = 0, size: number = 3): void {
    this.filters.page = page;  
    this.filters.size = size;  

    console.log('Filtros aplicados:', this.filters);  

    this.eventService.getEvents(this.filters, page, size).subscribe(
      (events) => {
        this.events = events;
        this.hasMore = events.length === size;  
      },
      (error) => {
        console.error('Erro ao buscar eventos:', error);
      }
    );
  }

  applyFilters(): void {
    this.p = 1;  
    this.getEvents();
  }

  viewEvent(id: string): void {
    this.router.navigate(['/events', id]);
  }
}





