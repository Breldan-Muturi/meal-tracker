import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';
import { MealDetailsComponent } from '../meal-details/meal-details.component';

@Component({
  selector: 'app-meal-edit-form',
  templateUrl: './meal-edit-form.component.html',
  styleUrls: ['./meal-edit-form.component.css']
})
export class MealEditFormComponent implements OnInit {
  
  newMealDetailsComponent = new Meal(0,"","",new Date(),"");
  @Output() editMeal = new EventEmitter<MealDetailsComponent>();

  //subnitEdit(){
  //  this.editMeal.emit(this.newMeal);
  //}
 
  constructor() { }

  ngOnInit() {
  }

}
