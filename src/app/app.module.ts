import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

<<<<<<< HEAD
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
=======
import {
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
} from '@angular/material';
>>>>>>> 065079954eedf8bc9cf57a1a8ce63b7876eec243

import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
<<<<<<< HEAD
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table';
=======
import { EventListComponent } from './event-list/event-list.component';
>>>>>>> 065079954eedf8bc9cf57a1a8ce63b7876eec243
import { EventManagementComponent } from './event-management/event-management.component';
import { EventRegistrationFormComponent } from './event-registration-form/event-registration-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserManagementComponent } from './user-management/user-management.component';
<<<<<<< HEAD
import { EventCreateComponent } from './event-create/event-create.component';
import { AdminComponent } from './admin/admin.component';
=======
import { UserDetailsComponent } from './user-details/user-details.component';
>>>>>>> 065079954eedf8bc9cf57a1a8ce63b7876eec243
import { UserViewComponent } from './user-view/user-view.component';

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
<<<<<<< HEAD
    EventCreateComponent,
    AdminComponent,
    UserViewComponent,
    PageNotFoundComponent
=======
    UserDetailsComponent,
    PageNotFoundComponent,
    UserViewComponent
>>>>>>> 065079954eedf8bc9cf57a1a8ce63b7876eec243
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
<<<<<<< HEAD
    MatDialogModule,
    FormsModule,
=======
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
>>>>>>> 065079954eedf8bc9cf57a1a8ce63b7876eec243
    ReactiveFormsModule
  ],
  entryComponents: [
    EventRegistrationFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
