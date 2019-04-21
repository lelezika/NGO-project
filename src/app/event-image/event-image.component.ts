import {
  Component,
  OnInit,
  Input,
	SimpleChanges,
} from '@angular/core';

import { NgoEvent, DEFAULT_EVENT } from '../event';

// For a different default image,
//   place the image in the assets folder
//   then place the path to the file like as shown below
const defaultUrl = '/assets/image-not-found.png';

@Component({
  selector: 'app-event-image',
  templateUrl: './event-image.component.html',
  styleUrls: ['./event-image.component.css']
})
export class EventImageComponent implements OnInit {

  @Input('event')
  selectedEvent: NgoEvent;
  imageUrl: string;

  constructor() {
    this.imageUrl = defaultUrl;
  }

	ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedEvent
        && this.selectedEvent.imagePath != ''
        && this.selectedEvent.imagePath != 'null'
        && this.selectedEvent.imagePath != null) {
      this.imageUrl = "http://localhost:4000"+this.selectedEvent.imagePath;
    }
  }

}
