import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { MealFormComponent } from './meal-form/meal-form.component';
import { FormsModule } from '@angular/forms';
import { MealDetailsFormComponent } from './meal-details-form/meal-details-form.component';
import { MealEditFormComponent } from './meal-edit-form/meal-edit-form.component';
import { EditsDirective } from './edits.directive';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealDetailsComponent,
    HighlightDirective,
    DateCountPipe,
    MealFormComponent,
    MealDetailsFormComponent,
    MealEditFormComponent,
    EditsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
