import { Component, OnInit } from '@angular/core';
//import { Meal } from '../meal';
import { Meals } from '../meals';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {  
    meals = Meals;
      toggleDetails(index){
        this.meals[index].showDescription = !this.meals[index].showDescription;
      }

      completeMeal(isComplete, index){
        if(isComplete){
          let toComplete = confirm(`Have you had ${this.meals[index].food} as per what was prescribed ?`)

          if(toComplete){
            this.meals.splice(index,1)
          }
        }
      }

      addNewMeal(meal){
        let mealLength = this.meals.length;
        meal.id = mealLength+1;
        meal.completeDate = new Date(meal.completeDate)
        this.meals.push(meal)
      }

      
  constructor() { }

  ngOnInit() {
  }

}
