import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventManagementComponent } from "./event-management/event-management.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
const routes: Routes = [
  { path: '', redirectTo:'departments', pathMatch:'full'},
  { path: 'api/event', component: EventManagementComponent},
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
