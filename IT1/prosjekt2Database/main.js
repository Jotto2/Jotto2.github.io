// HTML-elementer
const secAllPosts = document.querySelector("#allPosts");
const postMakerForm = document.querySelector("#skjemaa");
const inputText = document.querySelector("#inpMelding");
const signedIn = document.querySelector("#signedInText");

// Firebase
const db = firebase.database();
const posts = db.ref("posts");


// Definerer user globalt, siden vi skal hente verdier fra den innloggede brukeren
let user;

// Timestamp funksjon
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + hour + ':' + min;
  return time;
}

// Her kommer det et par funksjoner
// function lagreMelding(evt) {}
function lagreMelding(evt) {
    evt.preventDefault();
    posts.push({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        text: inpMelding.value
    });
    postMakerForm.reset();
}

// function visMelding() {}
function visMelding(snap) {
    const melding = snap.val();
    let klasse = "others";
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
            <a href="#">
              <img class="postProfilePicture" src="${bilde}">
            </a>
            <div class="postND">
              <a href="#">
                <h1 class="postName">${melding.displayName}</h1>
              </a>
              <p class="postDate">${timeConverter(melding.timestamp)}</p>
            </div>
          </section>
          <p class="postText">${melding.text}
        </section>
    ` + secAllPosts.innerHTML;
}

// Sjekker om vi er logget inn
firebase.auth().onAuthStateChanged( newuser => {
    if (newuser) {
        // Setter user til den innloggede brukeren
        user = newuser;
        // Event Listeners
        postMakerForm.addEventListener("submit", lagreMelding);
        posts.on("child_added", visMelding);
        signedIn.innerHTML = `You are signed in as ${user.displayName}`;
    } else {
        signedIn.innerHTML = `You are not signed in`;
    }
});
