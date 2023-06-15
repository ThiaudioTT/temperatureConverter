import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureConverterComponent } from './components/temperature-converter/temperature-converter.component';
import { FormsModule } from '@angular/forms';
import { DecimalLimitDirective } from './directives/decimal-limit.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverterComponent,
    DecimalLimitDirective
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
