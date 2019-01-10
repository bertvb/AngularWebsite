import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logs:Array<string>=[];

  constructor() { }

  sendToLog(msg: string) {
    this.logs.push("logged:" + msg);
    console.log('Logging: ' + msg);
  }

  getLogs(){
    console.log("showing all logged data: "+this.logs);
    return this.logs;
  }
}
