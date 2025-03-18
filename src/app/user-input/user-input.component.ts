import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../../investment.input.model';
import { InvestmentService } from '../investment-sevice';

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // calculate = output<InvestmentInput> ();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enterdExpectedReturn = signal('5');
  enterdDuration = signal('10');

  constructor( private investmentService: InvestmentService) {}
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enterdExpectedReturn(),
      duration: +this.enterdDuration()
    });
    // this.calculate.emit();
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enterdExpectedReturn.set('5');
    this.enterdDuration.set('10');


    // console.log("submited")
    // console.log(this.enteredInitialInvestment);
    // console.log(this.enteredAnnualInvestment);
    // console.log(this.enterdExpectedReturn);
    // console.log(this.enterdDuration);
  }

}
