import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDecimalLimit]'
})
export class DecimalLimitDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    const inputElement = event.target;
    const inputValue = inputElement.value;

    // Remove any non-digit characters from the input value
    const numericValue = inputValue.replace(/[^0-9.-]/g, '');

    // Set the formatted value back to the input element
    inputElement.value = this.limitDecimals(numericValue, 2); // Change '2' to the desired decimal limit
  }

  private limitDecimals(value: string, decimalLimit: number): string {
    const parts = value.split('.');
    if (parts.length === 2) {
      const decimalPart = parts[1].substring(0, decimalLimit);
      return `${parts[0]}.${decimalPart}`;
    }
    return value;
  }
}
