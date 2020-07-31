import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class ConsoleLoggerService implements LoggerService {
  info(message: any, ...optionalParams: any[]): void {
    console.info(message, optionalParams);
  }

  debug(message: any, ...optionalParams: any[]): void {
    console.debug(message, optionalParams);
  }

  warn(message: any, ...optionalParams: any[]): void {
    console.warn(message, optionalParams);
  }

  error(message: any, ...optionalParams: any[]): void {
    console.error(message, optionalParams);
  }  
}