# firebase documentatie

#installeren

Angular Firebase Package installeren in projectfolder:  
`npm install @angular/fire firebase --save`  
1: inloggen met google op https://console.firebase.google.com  

2: geklikt op project toevoegen,  
projectnaam: Adresboeksite
locatie: België  
cloud firestore-locatie: US-central  
standaardinstellingen gebruiken  

3: We kiezen vervolgens voor een Cloud Firestore database,  
in deze database vullen we nu de database gegevens in zoals hier weergegeven (sample start data):  
[Cloud Firestore database-Data](config/cloudFirestore.png)  

4: Bij projectinstellingen gaan we "Firebase toevoegen aan uw webapp"  
We kopiëren deze code en zetten het in enviroments.ts:  
```
  firebaseconfig: {  
    apiKey: "AIzaSyB41bQIJ9EL37nySpmrGWBtv8sPpEUWM2U",  
    authDomain: "adresboeksite.firebaseapp.com",  
    databaseURL: "https://adresboeksite.firebaseio.com",  
    projectId: "adresboeksite",  
    storageBucket: "adresboeksite.appspot.com",  
    messagingSenderId: "489411456936"  
  }  
```
5: Nu gaan we de module importeren en linken met deze config in environment  
we zetten deze code in app.module.ts:  
```
import { AngularFireModule } from '@angular/fire';  
import { AngularFirestoreModule } from '@angular/fire/firestore';  
import { AngularFirestore } from '@angular/fire/firestore';  
import { environment } from '../environments/environment';  
```  
met deze imports onder @NgModule:  
```
@NgModule({  
  declarations: [  
    ...  
  ],  
  imports: [  
    ...,  
    AngularFirestoreModule,  
    AngularFireModule.initializeApp(environment.firebaseconfig, 'AngularApp')  
  ],  
  ...
})  
```  

#gebruik:

We kunnen nu AngularFireStore gebruiken nadat we deze nog even importeren naar de component en met dependency injection in de constructor zetten:  
```
import { Observable } from 'rxjs';  
import { AngularFirestore } from '@angular/fire/firestore';  
```  
```
constructor(private db:AngularFirestore, ...) {  
    this.usersRef = db.collection<User>('users');  
```
