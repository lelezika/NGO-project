import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { EventService,NgoEvent } from '../event.service';
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


  onAddNewEvent(): void {
    this.eventsService.setModuleHeader("Create New Event");
    this.router.navigate(['/admin/create-event']);
  }


  onEditEvent(val) {
    this.eventsService.setModuleHeader("Edit Event ( "+ val.eventName +" )");
    this.router.navigate(['/admin/edit-event', val.id]);
  }



}






