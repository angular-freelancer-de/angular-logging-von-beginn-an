import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { ConsoleLoggerService } from './services/console-logger.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [
    {provide: LoggerService, useClass: ConsoleLoggerService}
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
