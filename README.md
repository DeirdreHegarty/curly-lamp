# curly-lamp

### Angular App (Basics)

```
# new app
ng new <name>

# To RUN - http://localhost:4200
ng serve

```
* app-component.ts = `app-root`
* app.component.html = view for app-component.ts
* `<app-root></app-root>` is called inside index.html
* `<app-meals></app-meals>` is called inside app.component.html
* the structure of each meal object is defined in `/src/app/meal.ts`
  * this is then imported into `meal-array.ts` and `meals.components.ts`

### Routing

*inside `app.module.ts`*   

* include `import { RouterModule, Routes } from '@angular/router';` (this should be in line 3)  
* under the imports, create an array of all the routes/links

```

const hotelAppRoutes: Routes = [
  { path: 'welcomeRoute', component: WelcomeComponent},
  { path: 'faqRoute', component: FaqComponent},
  { path: 'activitiesRoute', component: ActivitiesComponent},
  { path: 'roomsRoute', component: RoomsComponent},
  { path: 'foodRoute', component: FoodComponent},
  { path: '', redirectTo: 'welcomeRoute', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

```

and indicate route tracking  

```
  imports: [
    BrowserModule,
    RouterModule.forRoot(hotelAppRoutes,{ enableTracing: true })
  ],
 ```

*inside `app.component.html`*

```

<h1>The App-Root Component</h1>
<div class = "row">

  <div class = "col">
    <a  routerLink="/welcomeRoute" routerLinkActive="active" class="btn btn-lg   btn-info">Welcome</a>
   </div>
  <div class = "col">
    <a  routerLink="/roomsRoute" routerLinkActive="active" class="btn btn-lg   btn-danger">Rooms</a>
   </div>

    <div class = "col">
    <a   routerLink="/foodRoute" routerLinkActive="active" class="btn btn-lg    btn-warning">Food</a>
  </div>
  <div class = "col">
<a   routerLink="/activitiesRoute" routerLinkActive="active" class="btn btn-lg btn-info">Activities</a> 
 </div>
 <div class = "col">
<a   routerLink="/faqRoute" routerLinkActive="active" class="btn btn-lg  btn-primary">FAQ</a>
 </div>
</div>

<!-- the COMPONENT TEMPLATE is rendered within the <router-outlet> -->
<router-outlet></router-outlet>

```
`<router-outlet></router-outlet>` is important so everything is routed and renders as expected