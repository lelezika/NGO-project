import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserViewEventComponent } from './user-view-event/user-view-event.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/eventlist', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent, canActivate: [], children: [
    {path: 'eventlist', component: UserViewComponent},
    {path: 'events/:id', component: UserViewEventComponent},
    {path: 'user-management', component: UserManagementComponent},
    {path: 'event-management', component: EventManagementComponent},
    {path: 'create-event', component: EventCreateComponent},
    {path: 'edit-event/:eventId', component: EventCreateComponent}
  ]},
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'eventlist', component: EventListComponent },
  { path: 'events/:id', component: EventDetailComponent },
  // { path: 'page-not-found', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
