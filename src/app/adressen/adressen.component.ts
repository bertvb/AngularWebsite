import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
  usersRef: AngularFirestoreCollection<User>;
  usersId: Observable<User[]>;

  constructor(private db:AngularFirestore) {
    this.usersRef = db.collection<User>('users');
    this.usersId = this.usersRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    )
  }

  ngOnInit() {
  }

}
