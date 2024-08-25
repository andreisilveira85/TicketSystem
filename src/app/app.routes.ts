import { Routes } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReviewComponent } from './components/review/review.component';

export const routes: Routes = [

    {
        path: 'events' ,
        component:EventComponent
    },

    {
        path: 'rating' ,
        component:RatingComponent
    },
    
    {
        path: 'review' ,
        component:ReviewComponent
    },

];
