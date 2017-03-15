import { Component } from '@angular/core';

@Component({
    selector: 'benificiary-info',
    template: require('./benificiaryinfo.component.html')
})
export class BenificiaryInfoComponent {
    public name: String;
    public email: String;
    public phoneNumber: Number; 
}
