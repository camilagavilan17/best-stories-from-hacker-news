import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestStoriesComponent } from './components/best-stories/best-stories.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';

const routes: Routes = [
  { path: '', redirectTo: 'best', pathMatch: 'full'},
  { path: 'best', component: BestStoriesComponent },
  { path: 'top', component: TopStoriesComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
