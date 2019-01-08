import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-adressen',
  templateUrl: './adressen.component.html',
  styleUrls: ['./adressen.component.css']
})
export class AdressenComponent implements OnInit {
  users: Observable<any[]>;
  
  constructor(private db:AngularFirestore) {
    this.users = db.collection('users').valueChanges();
  }
  ngOnInit() {
  }

}
