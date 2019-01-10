import { Component, OnInit } from '@angular/core';
import { LoggingService} from '../logging.service';
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
  closed = true;
  autheduserId: string;
  autheduserEmail: string;

  constructor(private log: LoggingService,private db:AngularFirestore,private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(Auser => {
      if(Auser){
        this.autheduserId = Auser.uid;
        this.autheduserEmail = Auser.email;
        this.closed = false
      }
      else
        this.closed = true
    })
  }

  ngOnInit() {
  }

  signIn() {
    this.log.sendToLog('Sign In');
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pass)
      .catch(reason => { this.log.sendToLog(reason); })
      .then(value => { 
        if(value != undefined){
          this.log.sendToLog("Login Successful!");
        }; });
  }
  signOut() {
    this.log.sendToLog('Sign Out');
    this.afAuth.auth.signOut();
  }
}
