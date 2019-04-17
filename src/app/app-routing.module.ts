import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { UserViewComponent } from './user-view/user-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/eventlist', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent, children: [
    {path: 'user-view', component: UserViewComponent},
    {path: 'user-management', component: UserManagementComponent},
    {path: 'event-management', component: EventManagementComponent},
    {path: 'create-event', component: EventCreateComponent},
    {path: 'edit-event/:eventId', component: EventCreateComponent}
  ]},
  { path: 'eventlist', component: EventListComponent },
  { path: 'eventdetail', component: EventDetailComponent },
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
