import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggingService} from '../logging.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

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
  usersRef: AngularFirestoreCollection<User>;
  usersId: Observable<User[]>;
  autheduserId: string;
  autheduserEmail: string;

  constructor(private log: LoggingService,private db:AngularFirestore, private auth: AngularFireAuth) {
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
  updateNummer(){
    
  }
  updatePostcode(){
    
  }
  updateGemeente(){
    
  }
  updateLand(){
    
  }  
}
