console.log("Hello World");

// Oppretter database
const db = firebase.database();
const bloggere = db.ref("bloggere");

// Pusher en string til databasen, og Firebase lager primørnøkkelen
bloggere.push("Sophie Elise");

// Pusher et objekt, firebase lager primærnøkkel
bloggere.push({
  "navn": "Komikerfrue",
  "folgere": 59000
});

// Lager et objekt med egendefinert primernøkkel "pappahjerte"
const pappahjerte = bloggere.child("pappahjerte");
pappahjerte.set

  "navn": "Peppa Gris",
  "folgere": 200000
});

// Oppdaterer pappahjerte med nytt navn
pappahjere.update({
  "navn":"Hans Olav Lahlum"
})
