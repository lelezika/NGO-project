import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
<<<<<<< HEAD
import { EventManagementComponent } from "./event-management/event-management.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EventCreateComponent } from './event-create/event-create.component';
=======
import { EventManagementComponent } from './event-management/event-management.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
>>>>>>> ea09af4c1d06e7a228121e0a99a96d61b44e6d31


const routes: Routes = [
  { path: '', redirectTo: '/eventlist', pathMatch: 'full' },
<<<<<<< HEAD
  {path: 'admin', component: Admin, canActivate: [AdminAuthGuard], children: [
    {path: 'user-view', component: UserViewComponent},
    {path: 'user-management', component: UserManagementComponent},
    {path: 'event-management', component: EventManagementComponent},
    {path: 'create-event', component: EventCreateComponent},
    {path: 'edit-event/:eventId', component: EventCreateComponent}
  ]},
  { path: 'eventlist', component: EventListComponent },
  { path: 'eventdetail', component: EventDetailComponent },
  { path: '**', component:PageNotFoundComponent }
=======
  { path: 'api/users', component: UserManagementComponent },
  { path: 'api/event', component: EventManagementComponent },
  { path: 'eventlist', component: EventListComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
>>>>>>> ea09af4c1d06e7a228121e0a99a96d61b44e6d31
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
