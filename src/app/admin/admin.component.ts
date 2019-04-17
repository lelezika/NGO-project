import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  selectedModule: string;
  headerFlag = false;

  mobileQuery: MediaQueryList;
  fillerNav: string[] = ['User Management', 'Event Management', 'User View'];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private eventsService: EventService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.headerFlag = false;
    this.eventsService.moduleHeader.subscribe(header => this.selectedModule = header);
  }

  onModuleSelected(selectedModule) {
    this.eventsService.setModuleHeader(selectedModule);
    this.headerFlag = true;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
