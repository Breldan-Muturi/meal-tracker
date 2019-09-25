import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from'../meal';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  
  @Input() meal: Meal;
  @Output() isComplete = new EventEmitter<boolean>();

  toggleEdit(index){
    this.meal[index].showEdit= !this.meal[index].showEdit;
  }  

  mealComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
