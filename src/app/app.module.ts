import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CountDaysPipe } from './count-days.pipe';
import { CaseBoldDirective } from './case-bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GithubSearchComponent,
    NavbarComponent,
    NotFoundComponent,
    CountDaysPipe,
    CaseBoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
