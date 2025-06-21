import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { MoviedetailsComponent } from "./components/moviedetails/moviedetails.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
{path: 'movie/:id', component:MoviedetailsComponent},



]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class MoviesRoutingModule{}
