import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggingService} from '../logging.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

export interface User {
  id?: string;
  uID: string;
  adressen: Array<any>;
}

@Component({
  selector: 'app-adressen',
  templateUrl: './adressen.component.html',
  styleUrls: ['./adressen.component.css']
})
export class AdressenComponent implements OnInit {
  newstraat: string;
  newnummer: number;
  newpostcode: number;
  newgemeente: string;
  newland: string;
  createstraat: string;
  createnummer: number;
  createpostcode: number;
  creategemeente: string;
  createland: string;
  closed = false;
  visibility = "hidden";
  usersRef: AngularFirestoreCollection<User>;
  usersId: Observable<User[]>;
  autheduserId: string;
  autheduserEmail: string;
  url: SafeResourceUrl;
  realurl="https://maps.google.com/maps/embed?width=100%&amp;height=350&amp;hl=en&amp;q=veeweidestraat%2013%20huldenberg%203040%20belgi%C3%AB+(Bel)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp"
  constructor(private log: LoggingService,private db:AngularFirestore, private auth: AngularFireAuth,sanitizer: DomSanitizer) {
    this.usersRef = db.collection<User>('users');
    this.usersId = this.usersRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    )
    this.auth.authState.subscribe(Auser => {
      if(Auser){
        this.autheduserId = Auser.uid;
        this.autheduserEmail = Auser.email
      }})
    this.url = sanitizer.bypassSecurityTrustResourceUrl(this.realurl);
  }

  ngOnInit() {
  }


  removeadres(u: User,i: number){
    //this.usersRef.doc(u.id).collection(u.adressen[i]).delete(); //error
  }
  createAdres(u:User){
    this.usersRef.doc(u.id).update({adressen: {
      straat: this.createstraat,
      nummer: this.createnummer,
      postcode: this.createpostcode,
      gemeente: this.creategemeente,
      land: this.createland
    }});
  }

  updateStraat(u: User,i: number){
    this.usersRef.doc(u.id).update(u.adressen[i].collection({straat: this.newstraat})); //error
  }
  updateNummer(u: User,i: number){
    this.usersRef.doc(u.id).update(u.adressen[i].collection({nummer: this.newnummer})); //error
  }
  updatePostcode(u: User,i: number){
    this.usersRef.doc(u.id).update(u.adressen[i].collection({postcode: this.newpostcode})); //error
  }
  updateGemeente(u: User,i: number){
    this.usersRef.doc(u.id).update(u.adressen[i].collection({gemeente: this.newgemeente})); //error
  }
  updateLand(u: User,i: number){
    this.usersRef.doc(u.id).update(u.adressen[i].collection({land: this.newland})); //error
  }
  
  

  toggleEdit(){
    if(this.visibility == "visible"){
      this.visibility = "hidden";
    }
    else{
      this.visibility = "visible";
    }
  }

}
