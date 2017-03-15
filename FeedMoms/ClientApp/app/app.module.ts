import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { MealListComponent } from './components/MealList/MealList.component'; 
import { BasicInfoComponent } from './components/basicinfo/basicinfo.component'; 
import { BenificiaryInfoComponent } from './components/benificiaryinfo/benificiaryinfo.component'; 

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent, 
        MealListComponent,
        BasicInfoComponent, 
        BenificiaryInfoComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'meal-list', component: MealListComponent },
            { path: 'create-meal-list/step-1', component: BasicInfoComponent },
            { path: 'create-meal-list/step-2', component: BenificiaryInfoComponent }, 
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
