# Service documentatie  

#installatie:  
maken van loggingservice:  
```
cd D:\School\EICT4\Semester1\webservicesApplications\AngularWebsite
ng g s logging
```  
dit maakt een eigen Service. Deze heeft @injectable om te laten zien dat deze een instantie mag aanmaken wanneer nodig.  
(niet instantiëren, anders hebben ze allen verschillende properties)  
WEL injecteren  

in mijn componenten: xxx.component.ts:  (niet in app.component.ts)  
`import { LoggingService} from '../logging.service';`  
in de constructors:  
`constructor(private log: LoggingService,  .....){.......}`  
en dan alleen in de root van mijn subcomponenten (app.component.ts):  
`providers: [LoggingService] `  
  
#gebruik:  
implementatie van functies in de logging.service.ts en deze functies en data zijn bruikbaar in al mijn subcomponenten  

 ik gebruik mijn logservice om  
 1: data door te geven van al mijn componenten naar mijn help component voor logging  
 2: om dubbele code voor mijn eigen console.log functie weg te houden  