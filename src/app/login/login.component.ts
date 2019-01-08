import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  pass = '';

  constructor(private db:AngularFirestore,private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  signIn() {
    console.log('Sign In');
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pass)
      .catch(reason => { console.log(reason); })
      .then(value => { console.log(value); });
  }
  signOut() {
    console.log('Sign Out');
    this.afAuth.auth.signOut();
  }
}
