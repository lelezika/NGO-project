import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserViewEventComponent } from './user-view-event/user-view-event.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminAuthGuard } from './auth/admin-auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';

const routes: Routes = [
  // {path: '', redirectTo: '/eventlist', pathMatch: 'full' },
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard], children: [
    {path: 'user-management', component: UserManagementComponent},
    {path: 'user-create', component: UserCreateComponent},
    {path: 'user-edit/:email', component: UserEditComponent},
    {path: 'user-delete/:email', component: UserDeleteComponent},
    {path: 'event-management', component: EventManagementComponent},
    {path: 'create-event', component: EventCreateComponent},
    { path: 'eventlist', component: UserViewComponent },
    { path: 'events/registered', component: RegistrationSuccessComponent },
    { path: 'events/:id', component: UserViewEventComponent },
    { path: 'edit-event/:id', component: EventEditComponent }
  ]},
  { path: 'eventlist', component: EventListComponent },
  { path: 'events/registered', component: RegistrationSuccessComponent },
  { path: 'events/:id', component: EventDetailComponent },
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
