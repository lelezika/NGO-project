import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { EventManagementComponent } from './event-management/event-management.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventRegistrationFormComponent } from './event-registration-form/event-registration-form.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
    EventManagementComponent,
    EventRegistrationFormComponent,
    PageNotFoundComponent,
    UserManagementComponent
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
    MatDialogModule
  ],
  entryComponents: [
    EventRegistrationFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
