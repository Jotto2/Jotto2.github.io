// HTML-elementer //
let secAllPosts = document.querySelector("#allPosts");
let postMakerForm = document.querySelector("#skjemaa");
let inputText = document.querySelector("#inpMelding");
let signedIn = document.querySelector("#signedInText");
let headerQuotes = document.querySelector("#headerQuotes");
let inpFile = document.getElementById("postMakerFile");

// Firebase referanser //
let db = firebase.database();
let posts = db.ref("posts");
let numberr = db.ref("numberbox").number;

// Definerer user globalt, siden vi skal hente verdier fra den innloggede brukeren
let user;

let allQuotes = ["People are like plants; we all lean toward the light.", "You gotta water your plants. Nobody can water them for you.", "Plant and your spouse plants with you; weed and you weed alone.", "Plants are not like us, and the more you study plants, the more different and deep ways you see that they are not like us.", "Organisms don't think of CO2 as a poison. Plants and organisms that make shells, coral, think of it as a building block.", "I am a gardener, I have a big green thumb, and I can take care of these plants really easily because they are all fake."];
let dbQuotes = db.ref("quotesArray");

i = 0;
setInterval(nextQuote, 5000);
headerQuotes.innerHTML = `"${allQuotes[0]}"`
// Funksjonen for quotes
function nextQuote(){
  headerQuotes.innerHTML = `"${allQuotes[i]}"`;
  i += 1;
  if(i == allQuotes.length){i = 0;};
}

// Funksjon som lagrer meldingene
function lagreMelding(evt) {
    let d = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    evt.preventDefault();
    posts.push({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        year: year,
        month: months[month],
        day: day,
        hour: hour,
        minute: minute,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        text: inpMelding.value
    });
    postMakerForm.reset();
}

// Funksjonene som viser meldingene
function visMeldingNew(snap) {
    let melding = snap.val();
    let klasse = "others";
    let key = snap.key;
    // Sjekker om denne meldingen kommer fra meg selv
    if(user.uid === melding.uid) {
        klasse = "me";
    }

    let bilde = "anonym.png";
    if(melding.photoURL) {
        bilde = melding.photoURL;
    }
    secAllPosts.innerHTML = `
        <section class="post">
          <section class="postInfo">
            <a href="user.html?id=${melding.displayName}">
              <img class="postProfilePicture" src="${bilde}">
            </a>
            <div class="postND">
              <a href="user.html?id=${melding.displayName}">
                <h1 class="postName">${melding.displayName}</h1>
              </a>
              <p class="postDate">${melding.day}. ${melding.month} - ${melding.hour}:${melding.minute}</p>
            </div>
          </section>
          <p class="postText">${melding.text}
        </section>
    ` + secAllPosts.innerHTML;
}

function visMeldingOld(snap) {
    let melding = snap.val();
    let klasse = "others";
    let key = snap.key;
    // Sjekker om denne meldingen kommer fra meg selv
    if(user.uid === melding.uid) {
        klasse = "me";
    }

    let bilde = "anonym.png";
    if(melding.photoURL) {
        bilde = melding.photoURL;
    }
    secAllPosts.innerHTML = secAllPosts.innerHTML + `
        <section class="post">
          <section class="postInfo">
            <a href="user.html?id=${melding.displayName}">
              <img class="postProfilePicture" src="${bilde}">
            </a>
            <div class="postND">
              <a href="user.html?id=${melding.displayName}">
                <h1 class="postName">${melding.displayName}</h1>
              </a>
              <p class="postDate">${melding.day}. ${melding.month} - ${melding.hour}:${melding.minute}</p>
            </div>
          </section>
          <p class="postText">${melding.text}
        </section>`;
}

// Sjekker om vi er logget inn
firebase.auth().onAuthStateChanged( newuser => {
    if (newuser) {
        // Setter user til den innloggede brukeren
        user = newuser;
        // Event Listeners
        postMakerForm.addEventListener("submit", lagreMelding);
        posts.on("child_added", visMeldingNew);

        signedIn.innerHTML = `You are signed in as <a href="user.html?id=${user.displayName}">${user.displayName}</a>`;
    } else {
        signedIn.innerHTML = `Welcome to Plantr.<br>
        Start by signing in.`;
    }
});

// Funksjoner som kjøres når sort-knappene trykkes
function newest(){
  secAllPosts.innerHTML = ``;
  posts.orderByChild("timestamp").on("child_added", visMeldingNew);
}

function oldest(){
  secAllPosts.innerHTML = ``;
  posts.orderByChild("timestamp").on("child_added", visMeldingOld);
}
