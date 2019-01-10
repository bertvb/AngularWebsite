# Authenticatie documentatie

1: We moeten eerst de firebase authenticatie instellen in de webrowser via https://console.firebase.google.com  
Hier gaan we bij Authentication->inlogmethode: email aanzetten  
Vervolgens gaan we naar Authentication->Gebruikers en we maken volgende data aan: 
[Authenticaton Firebase Users](config/authenticationUsers.png)  

In app.module.ts zetten we deze code:
```
import { AngularFireAuth } from '@angular/fire/auth';  
...  

@NgModule({  
  declarations: [  
    ...  
  ],  
  imports: [  
    ...  
  ],  
  providers: [AngularFirestore, AngularFireAuth],  
  ...  
})  
```  
Import van AngularFireAuth in de component adressen.component.ts en login.component.ts:  
`import { AngularFireAuth } from '@angular/fire/auth';`  
DI in de constructor en observable voor authenticatie:  
```
constructor(..., private auth: AngularFireAuth) {  
    ...
    this.auth.authState.subscribe(Auser => {  
      if(Auser){  
        this.autheduserId = Auser.uid;  
        this.autheduserEmail = Auser.email  
      }})  
    ...  
}  
```  

Verder worden er nog functies voor inloggen en uitloggen gemaakt en de loginID vergeleken met die in de database om te zorgen dat alleen de adressen van de ingelogde persoon worden weergegeven.