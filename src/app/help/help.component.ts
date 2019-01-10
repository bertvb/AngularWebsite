import { Component, OnInit } from '@angular/core';
import { LoggingService} from '../logging.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  logsweergave:Array<string>=[];
  subject = "";
  textarea = "";
  logclosed = true;
  constructor(private log: LoggingService) { }

  ngOnInit() {

    this.logsweergave=this.log.getLogs();
  }

  onClickFunct(){
    this.subject = "";
    this.textarea = "";
  }

  togglelog(){
    if(this.logclosed == true){
      this.logclosed = false;
    }
    else{
      this.logclosed = true;
    }
  }
}
