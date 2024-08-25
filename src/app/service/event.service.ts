import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event.model';

@Injectable({
    providedIn: 'root'
})

export class EventService {
    private apiUrl = 'http://localhost:8080/events';

    constructor(private http: HttpClient) { }

    getEvents(filters: any, page: number = 0, size: number = 3): Observable<EventModel[]> {
        let params = new HttpParams();
    
        if (filters.name) {
            params = params.set('name', filters.name);
        }
        if (filters.category) {
            params = params.set('category', filters.category);
        }
        if (filters.organizerId) {
            params = params.set('organizerId', filters.organizerId);
        }
        if (filters.status) {
            params = params.set('status', filters.status);
        }
        if (filters.startTimeAfter) {
            params = params.set('startTimeAfter', filters.startTimeAfter);
        }
        if (filters.startTimeBefore) {
            params = params.set('startTimeBefore', filters.startTimeBefore);
        }
        if (filters.minPrice) {
            params = params.set('minPrice', filters.minPrice.toString());
        }
        if (filters.maxPrice) {
            params = params.set('maxPrice', filters.maxPrice.toString());
        }
        if (filters.minCapacity) {
            params = params.set('minCapacity', filters.minCapacity.toString());
        }
        if (filters.remainingCapacity) {
            params = params.set('remainingCapacity', filters.remainingCapacity.toString());
        }
        if (filters.createdAfter) {
            params = params.set('createdAfter', filters.createdAfter);
        }
        if (filters.location) {
            params = params.set('location', filters.location);
        }
    
        params = params.set('page', page.toString());
        params = params.set('size', size.toString());
    
        return this.http.get<EventModel[]>(this.apiUrl, { params });
    }
}