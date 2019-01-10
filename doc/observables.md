# observables documentatie

#instellen:
in adressen.component.ts:
```
import { Observable } from 'rxjs';
import 'rxjs/Rx';
```

#gebruik:

Ik gebruik observables om te reageren op mijn data uit de database van firestore en de authentication van de users die inloggen op mijn website in firestore in login.component.ts en adressen.component.ts :
```
constructor(private log: LoggingService,private db:AngularFirestore,private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(Auser => {
      if(Auser){
        this.autheduserId = Auser.uid;
        this.autheduserEmail = Auser.email;
        ...
      }
      else
        ...
    })
  }
```
In Angular zit al een unsubscribe on destroy in de observable dus er is geen memory leak.
