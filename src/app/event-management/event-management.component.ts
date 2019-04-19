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

  eventslist: NgoEvent[] = [];

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
    private eventsService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findEventList();
  }


  findEventList(): void {
    this.eventsService.getEventList().subscribe(data => this.eventslist = data);
  }


  // onAddNewEvent(): void {
  //   this.eventsService.setModuleHeader("Create New Event");
  //   this.router.navigate(['/admin/create-event']);
  // }

  /**
   * PopUp form for Editing New Event (EDIT EVENT)
   */
  onEditEvent(val) {
    this.eventsService.setModuleHeader("Edit Event ( "+ val.eventName +" )");
    this.router.navigate(['/admin/edit-event', val.id]);
  }

  // onDeleteEvent(event: NgoEvent) {
  //   /**
  //    * Passing the selected event to be deleted to eventsService to create an observable of BehaviourSubject
  //    */
  //   this.eventsService.eventToDelete(event);
  //   /**
  //    * opening the DeleteEventComponent as popup dialog
  //    */
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = 'auto';

  //   const dialogRef = this.dialog.open(DeleteEventComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // location.reload();
  //     this.eventsSub = this.eventsService.getEventUpdateListener()
  //     .subscribe((events: NgoEvent[]) => {
  //       this.events = events;
  //     });
  //   });
  // }

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



