export enum EventCategory {Conference, Seminar, Presentation}

export class Event {
  id: number;
  name: string;
  description: string;
  category: EventCategory;
  startDate: Date;
  endDate: Date;
  location: string;
  allowRegistration: boolean;
  imagePath: string;
  adultPrice: number;
  childPrice: number;
}
