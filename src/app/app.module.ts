import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatPaginator,
  MatTooltip,
  MatCard
} from '@angular/material';

import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { EventRegistrationFormComponent } from './event-registration-form/event-registration-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserViewComponent } from './user-view/user-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserService } from './user.service';
import { EventService } from './event.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EventCreateComponent,
    EventDetailComponent,
    EventListComponent,
    EventManagementComponent,
    EventRegistrationFormComponent,
    UserManagementComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    UserViewComponent,
    NavBarComponent,
    MatPaginator,
    MatTooltip,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCardModule
  ],
  entryComponents: [
    EventRegistrationFormComponent
  ],
  providers: [EventService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
