import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagememtComponent } from './user-managememt/user-managememt.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'users', component: UserManagememtComponent },
  { path: 'events', component: EventListComponent },
  { path: 'eventdetail', component: EventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
