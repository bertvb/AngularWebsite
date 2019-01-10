# domSanitizer documentatie

Voor het gebruik van de google maps iframe in de adressenlijst, moet ik dynamisch de iframe source (of "src") url kunnen aanpassen aan de hand van de data in de database voor dit adres. Hiervoor moet er dus property binding gebeuren.  
Angular is standaard beveiligd met X-frame-options deze zorgen er dus voor dat de property injection niet werkt. de url moet eerst "veilig" worden gemaakt.  

ik maak mijn google url aan in adressen.component.ts als `realurl` en import het volgende:  
`import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';`  

vervolgens zet ik de domsanitizer in de constructor met DI en maak de omzetting van de "onveilige" realurl naar de veilige url
```
constructor(... ,sanitizer: DomSanitizer) {  
    ...  
    this.url = sanitizer.bypassSecurityTrustResourceUrl(this.realurl);  
  }
```  
de iframe werkt nu wel en geeft geen security error meer terug maar de marker in de kaart is verdwenen waardoor deze iframe zijn nut verloren is. (Geen oplossing gevonden)