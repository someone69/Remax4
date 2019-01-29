import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { TeamComponent } from "./components/team/team.component";
import { ProfilComponent } from "./components/profil/profil.component";



const routes: Routes = [
  {path: "",  component: HomeComponent},
  {path: "team", component: TeamComponent},
  {path: "profil", component: ProfilComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
