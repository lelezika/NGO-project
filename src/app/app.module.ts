import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
<<<<<<< HEAD
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table';
=======
>>>>>>> ea09af4c1d06e7a228121e0a99a96d61b44e6d31
import { EventManagementComponent } from './event-management/event-management.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventRegistrationFormComponent } from './event-registration-form/event-registration-form.component';
import { UserManagementComponent } from './user-management/user-management.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { EventCreateComponent } from './event-create/event-create.component';
import { UserViewComponent } from './user-view/user-view.component';
=======
>>>>>>> ea09af4c1d06e7a228121e0a99a96d61b44e6d31

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
    EventManagementComponent,
    EventRegistrationFormComponent,
<<<<<<< HEAD
    UserManagementComponent,
    EventCreateComponent,
    UserViewComponent
=======
    PageNotFoundComponent,
    UserManagementComponent
>>>>>>> ea09af4c1d06e7a228121e0a99a96d61b44e6d31
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
<<<<<<< HEAD
    MatButtonModule,
    MatDialogModule
=======
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EventRegistrationFormComponent
>>>>>>> ea09af4c1d06e7a228121e0a99a96d61b44e6d31
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
