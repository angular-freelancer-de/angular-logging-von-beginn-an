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
    this.loggerService.info("It's a info");
    this.loggerService.debug("It's debug");
    this.loggerService.warn("It's a warning");
    this.loggerService.error("It's a error");
  }
}
