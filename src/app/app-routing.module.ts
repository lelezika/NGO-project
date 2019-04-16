import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventManagementComponent } from "./event-management/event-management.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'api/users', component: UserManagementComponent },
  { path: 'api/event', component: EventManagementComponent},
  { path: 'events', component: EventListComponent },
  { path: 'eventdetail', component: EventDetailComponent },
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
