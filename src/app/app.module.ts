import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';

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
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
