# Bootstrap documentatie

installatie:  
installeer bootstrap via command line:  
```
cd D:\School\EICT4\Semester1\webservicesApplications\AngularWebsite
npm install --save @ng-bootstrap/ng-bootstrap bootstrap@4
```  
(bootstrap 4 en g-bootstrap geinstalleerd en opgenomen in package.json)

in app.module.ts:  
`import { NgbModule } from '@ng-bootstrap/ng-bootstrap';`  
en  
```
imports: [
    NgbModule,
    ...
],
```  
in angular.json:
```  
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ...
],
```  

gebruik:
er is bootstrap gebruikt voor allerlei componenten in deze website,
bijvoorbeeld de styles van de divs, de kaders voor data, buttons en ngb alerts