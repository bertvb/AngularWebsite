# Routes documentatie  

#routes instellen:  

1: Routes Definiëren:  
    in app.module.ts definieer ik mijn routes naar elke component die ik heb aangemaakt en ook nog een laatste die ervoor 
    zorgt dat de gebruiker geredirect word naar index bij het ingeven van een niet geldige route:  
    ```
const MyRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adressen', component: AdressenComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', redirectTo: '' }
];
    ```  
2: Routes registreren:  
    de module RouterModule moet toegevoegd worden en de array van stap 1 eraan meegeven:  
    ```
imports: [
    RouterModule.forRoot(MyRoutes),
    ...
  ],
    ```  
3: Component invoegen in HTML waar route naar wijst in app.component.html:  
    ```
      <router-outlet></router-outlet>
    ```  
#gebruik:  

ik gebruik mijn routes om met url en tabbladen naar mijn verschillende componenten te kunnen springen en een single page  application te blijven waar niet alles op een hoop staat
`  <li class="nav-item" role="presentation" routerLinkActive="active"><a class="nav-link" [routerLink]="'./adressen'">Adressen</a></li>`  