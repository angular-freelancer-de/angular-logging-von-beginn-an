import { Component, VERSION, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.info("It's an info message");
    this.loggerService.debug("It's a debug message");
    this.loggerService.warn("It's a warning message");
    this.loggerService.error("It's an error message");
  }
}