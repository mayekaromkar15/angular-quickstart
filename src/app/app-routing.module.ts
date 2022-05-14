import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaunchComponent } from './launch/launch.component';

const routes: Routes = [
  { path: "", redirectTo: 'launch', pathMatch: 'full' },
  { path: "launch", component: LaunchComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
