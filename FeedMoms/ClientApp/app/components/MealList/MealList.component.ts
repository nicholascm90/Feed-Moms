import { Component } from '@angular/core';

@Component({
    selector: 'MealList',
    template: require('./MealList.component.html')
})
export class MealListComponent {
    public contributors = ["Angie", "Tim", "Bill"]; 

    public addNewContributor() {
        console.log("added"); 
    }
}
