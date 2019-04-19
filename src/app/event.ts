export const EVENT_CATEGORIES = [
  "Conference", "Seminar", "Presentation"
];

export const EVENT_STATUSES = [
  "Active", "Inactive"
];

export class Event {
  id: string;
  eventName: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  status: string;
  imagePath: string;
  adultTicketPrice: number;
  childTicketPrice: number;
}
