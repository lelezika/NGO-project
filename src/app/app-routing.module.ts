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
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminAuthGuard } from './auth/admin-auth.guard';

const routes: Routes = [
  // {path: '', redirectTo: '/eventlist', pathMatch: 'full' },
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard], children: [
    {path: 'user-view', component: UserViewComponent},
    {path: 'user-management', component: UserManagementComponent},
    {path: 'event-management', component: EventManagementComponent},
    {path: 'create-event', component: EventCreateComponent},
    {path: 'edit-event/:eventId', component: EventCreateComponent}
  ]},
  { path: 'eventlist', component: EventListComponent },
  // {path: 'add-user', component: AddUserComponent, canActivate: [AdminAuthGuard]},
  // {path: 'edit-user/:email', component: EditUserComponent, canActivate: [AdminAuthGuard]},
  // {path: 'delete-user/:email', component: DeleteUserComponent, canActivate: [AdminAuthGuard]},
  // {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  // {path: 'user-registration', component: UserRegistrationComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent, data: {message: 'Page not found!'}},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
