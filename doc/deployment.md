# deployment documentatie

ng serve is voor testing; echte deploy nodig:

1: Angular builden
    we gaan eerst angular builden voor productie:
    `ng build --prod --aot`
    (prod voor productie en aot voor ahead of time complilatie)

    de gebuilde data komt in de dist folder terrecht (D:\School\EICT4\Semester1\webservicesApplications\AngularWebsite\dist) en dit is de folder die we gaan instellen als directory die firebase mag opnemen om te hosten.


2: install firebase tools:
    `npm install -g firebase-tools`
3: login:
    `firebase login`
    internetpagina van google zal open gaan waarin we moeten inloggen met ons google account dat we hebben gebruikt voor firebase, we moeten firebase toelaten.
4: init
    4.1: `firebase init`
        We moeten nu de CLI features selecteren die we willen voor ons project, we selecteren hier database en hosting:
            (*) Database
            ( ) Firestore
            ( ) Functions
            (*) Hosting
            ( ) Storage
    4.2: selecteer een default firebase project, we selecteren hier AngularWebsite (AdresBoekWebsite)
    4.3: selecteer file voor database rules: we nemen hier de default (gewoon op enter drukken) = "database.rules.json"
    4.4: kies een public directory, dit is de directory waaruit onze firebaseHosting gaat bestanden nemen om te hosten,
        we gaan dus onze dist folder nemen omdat dit de locatie is waar het project naar gecomplileerd word voor productie (zie stap 1), we schrijven dus simpelweg: "dist" en drukken daarna op enter
5: deploy
    5.1: de data onder de dist folder zit nog genest in een folder /dist/AngularWebsite dus we halen deze data hieruit en     zetten het in de /dist folder
    5.2: `firebase deploy`
        Firebase is nu host van mijn project op de URL: https://adresboeksite.firebaseapp.com/