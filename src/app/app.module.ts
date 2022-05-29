import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CreateListComponent } from './create-list/create-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

//Routes within the web application
//const routes: Routes = [
//  { path: '', component: HomeComponent },
//  { path: 'profile/', component: ProfileComponent }
//];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    TopBarComponent,
    CreateListComponent,
    LoginComponent,
    RegistrationComponent,
    SearchResultsComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'createlist', component: CreateListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'searchresults', component: SearchResultsComponent },
      { path: 'moviedetails', component: MovieDetailsComponent },



    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
