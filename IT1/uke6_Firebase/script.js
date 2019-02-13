//Variabler til databasen
const db = firebase.database();
const kontakter = db.ref("kontakter");

//Variabler som refererer til HTML-elementene
const skjema = document.querySelector("#skjema");
const inpNavn = document.querySelector("#inpNavn");
const inpTelefon = document.querySelector("#inpTelefon");
const inpEpost = document.querySelector("#inpEpost");
const secKontakter = document.querySelector("#secKontakter");
//secKontakter.innerHTML = "Hei hei";

// Eksempler på funksjoner i javascript
/*
function f(x){
  return x*x;
}

console.log(f(2));

function j(eks){
  secKontakter.innerHTML = eks;
}

j("hei")
*/

function registerKontakt(hendelse){
  hendelse.preventDefault();
  const key = inpNavn.value;
  const data = {
    "telefon": inpTelefon.value,
    "epost": inpEpost.value
  };
  const kontakt = kontakter.child(key)
  kontakt.set(data);
  skjema.reset();
}

skjema.addEventListener("submit",registerKontakt);

function visKontakter(snapshot){
  const navn = snapshot.key
  const kontakt = snapshot.val();
  secKontakter.innerHTML += `
  <div>${navn}</div>
  <div>${kontakt.telefon}</div>
  <div>${kontakt.epost}</div>
  `;
}

kontakter.on("child_added",visKontakter);
