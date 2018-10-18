import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FoodComponent } from './food/food.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const hotelAppRoutes: Routes = [
  { path: 'faqRoute', component: FaqComponent },
  { path: 'welcomeRoute', component: WelcomeComponent },
  { path: 'activitiesRoute',        component: ActivitiesComponent },
  { path: 'roomsRoute',        component: RoomsComponent },
  { path: 'foodRoute',        component: FoodComponent },
  { path: '',   redirectTo: 'welcomeRoute', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    FoodComponent,
    ActivitiesComponent,
    FaqComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(hotelAppRoutes,{ enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
