export interface EventModel {
    id: string;
    name: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
    category: string;
    organizerId: string;
    maxCapacity: number;
    remainingCapacity: number;
    status: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
  }
  