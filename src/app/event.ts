export const EVENT_CATEGORIES = [
  "Conference", "Seminar", "Presentation"
];

export const EVENT_STATUSES = [
  "Active", "Inactive"
];

export class NgoEvent {
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
  __v:string
}

export const DEFAULT_EVENT: NgoEvent = {
  id: 'INVALID',
  eventName: 'Invalid Event',
  description: 'Invalid Event',
  category: 'Presentation',
  startDate: '',
  startTime: '',
  endDate: '',
  endTime: '',
  location: 'Nowhere',
  status: 'Inactive',
  imagePath: '',
  adultTicketPrice: 9999.99,
  childTicketPrice: 9999.99,
  __v:''
};
