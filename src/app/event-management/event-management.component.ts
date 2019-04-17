import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { EventService,NgoEvent } from '../event.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
} from '@angular/material';


@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  events: NgoEvent[] = [];
  isLoading = false;
  private eventsSub: Subscription;

  displayedColumns: string[] = [
    "event", "ctgy", "desc", "status", "location",
    "sDate", "eDate", "sTime", "eTime",
    "adltTktPrice", "chldTktPrice",
    "img", "action"
  ];
  dataSource: MatTableDataSource<NgoEvent>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private eventsService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
    /**
     * Initially Getting the list of Events from database
     */
    this.isLoading = true;
    this.eventsService.getEvents();
    this.eventsSub = this.eventsService.getEventUpdateListener()
      .subscribe((events: NgoEvent[]) => {
        this.isLoading = false;
        this.events = events;
        // Assign the data to the data source for the table to render (Angular Material)
        this.dataSource = new MatTableDataSource(this.events);
        /**
         * Code for pagination and sorting (from Angular Material)
         */
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddNewEvent(): void {
    this.eventsService.setModuleHeader("Create New Event");
    this.router.navigate(['/admin/create-event']);
  }

  /**
   * PopUp form for Editing New Event (EDIT EVENT)
   */
  onEditEvent(val) {
    this.eventsService.setModuleHeader("Edit Event ( "+ val.eventName +" )");
    this.router.navigate(['/admin/edit-event', val.id]);
  }

}




// export interface PeriodicElement {
//   name: string;
//   category: any;
//   location: any;
//   startdate: string;
//   enddate: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//  {name:'Bible study',category:'religious', location:'nj',
//   startdate:'10/10/1110',enddate:'10/10/1110'}
// ];



