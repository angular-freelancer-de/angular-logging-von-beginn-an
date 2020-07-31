import { Injectable } from "@angular/core";

@Injectable()
export abstract class LoggerService {
    abstract info(message: any, ...optionalParams: any[]): void;

    abstract debug(message: any, ...optionalParams: any[]): void;

    abstract warn(message: any, ...optionalParams: any[]): void;

    abstract error(message: any, ...optionalParams: any[]): void;
}