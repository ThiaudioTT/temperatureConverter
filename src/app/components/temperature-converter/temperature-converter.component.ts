import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})
export class TemperatureConverterComponent {

  celsius: number;
  fahrenheit: number;
  kelvin: number;

  constructor() {
    this.celsius = 0;
    this.fahrenheit = 0;
    this.kelvin = 0;
    this.kelvinToAll();
  }


  celsiusToAll() {
    this.celsius = Number(this.celsius);
    this.kelvin = Number(this.celsius) + 273.15;
    this.fahrenheit = (Number(this.celsius) * 9 / 5) + 32;
    this.fixDecimals();
  }

  fahrenheitToAll() {
    this.fahrenheit = Number(this.fahrenheit);
    this.celsius = (Number(this.fahrenheit) - 32) * 5 / 9;
    this.kelvin = Number(this.celsius) + 273.15;
    this.fixDecimals();
  }

  kelvinToAll() {
    this.kelvin = Number(this.kelvin);
    this.celsius = Number(this.kelvin) - 273.15;
    this.fahrenheit = (Number(this.celsius) * 9 / 5) + 32;
    this.fixDecimals();
  }

  fixDecimals() {
    this.celsius = Number(this.celsius.toFixed(2));
    this.fahrenheit = Number(this.fahrenheit.toFixed(2));
    this.kelvin = Number(this.kelvin.toFixed(2));
  }
}
