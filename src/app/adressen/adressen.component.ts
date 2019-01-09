import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  closed = false;
  usersRef: AngularFirestoreCollection<User>;
  usersId: Observable<User[]>;
  autheduserId: string;
  autheduserEmail: string;

  constructor(private db:AngularFirestore, private auth: AngularFireAuth) {
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
}
