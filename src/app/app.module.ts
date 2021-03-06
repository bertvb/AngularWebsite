import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AdressenComponent } from './adressen/adressen.component';
import { HelpComponent } from './help/help.component';

const MyRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adressen', component: AdressenComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent, 
    LoginComponent,
    AdressenComponent,
    HelpComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,//les7
    HttpModule,//les7
    RouterModule.forRoot(MyRoutes),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseconfig, 'AngularApp')
  ],
  providers: [AngularFirestore, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
