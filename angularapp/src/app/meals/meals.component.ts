import { Component, OnInit } from '@angular/core';

import {Meals} from '../meal';
import {mmm} from '../meal-array';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})

export class MealsComponent implements OnInit {
  
  breakfast: Meals = {
  	name : 'cereal',
  	price : 2.00,
  	course : 'Breakfast' 
  }
  breakfast2: Meals = {
  	name : 'yoghurt',
  	price : 2.00,
  	course : 'Breakfast' 
  }

  theMenu = mmm;

  constructor() { }

  ngOnInit() {
  }

}
