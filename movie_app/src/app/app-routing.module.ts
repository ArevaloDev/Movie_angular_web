import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './movies/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '**',
    redirectTo: 'movies',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
