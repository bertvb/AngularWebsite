import { Component } from '@angular/core';
import { LoggingService} from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdresBoekWebsite';
  providers: [LoggingService] //code hfst6 opdracht 3
}
