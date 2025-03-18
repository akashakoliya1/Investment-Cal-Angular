import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../investment-sevice';

@Component({
  selector: 'app-investment-result',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  // result = input<{ 
  // year: number,
  // interest: number,
  // valueEndOfYear: number,
  // annualInvestment: number,
  // totalInterest: number
  // }[]>()
  
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultsData()); 
}
