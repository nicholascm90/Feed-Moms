import { Component } from '@angular/core';

@Component({
    selector: 'basic-info',
    template: require('./basicinfo.component.html')
})
export class BasicInfoComponent {
    public name: String;
    public email: String;
    public phoneNumber: Number; 
}
