# curly-lamp

### Angular App

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