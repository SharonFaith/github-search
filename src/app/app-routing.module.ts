import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GithubSearchComponent } from './github-search/github-search.component'


const routes: Routes = [
  {path: 'landing-page', component: LandingPageComponent },
  {path: 'github-search', component: GithubSearchComponent},
  //{path: 'github-search/', component: UserReposComponent},
  
  {path: '', redirectTo:"/landing-page", pathMatch:"full"},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
