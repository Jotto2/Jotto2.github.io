// HTML referanser
let secAllPosts = document.querySelector("#allPosts");
let postMakerForm = document.querySelector("#skjemaa");
let inputText = document.querySelector("#inpMelding");
let signedIn = document.querySelector("#signedInText");
let headerQuotes = document.querySelector("#headerQuotes");
let inpFile = document.getElementById("postMakerFile");
let registerButton = document.getElementById("registerButton");
let secAllPlants = document.getElementById("allPlants");

// Firebase referanser
let db = firebase.database();
let posts = db.ref("posts");
let plantsInfo = db.ref("plantsInfo");
let storage = firebase.storage();


function visPlants(snapshot){
  let key = snapshot.key;
  let plant = snapshot.val();
  secAllPlants.innerHTML = secAllPlants.innerHTML + `
  <section class="plant">
  <p class="plantName">${plant.name}</p>
  <img class="plantPic"src="${plant.picture}">
  <a class="plantLink" href="">Read more</a>
  </section>`;
}

plantsInfo.orderByKey().on("child_added",visPlants);

// Definerer user globalt, siden vi skal hente verdier fra den innloggede brukeren
let user;

let allQuotes = ["People are like plants; we all lean toward the light.", "You gotta water your plants. Nobody can water them for you.", "Plant and your spouse plants with you; weed and you weed alone.", "Plants are not like us, and the more you study plants, the more different and deep ways you see that they are not like us.", "Organisms don't think of CO2 as a poison. Plants and organisms that make shells, coral, think of it as a building block.", "I am a gardener, I have a big green thumb, and I can take care of these plants really easily because they are all fake."];
let dbQuotes = db.ref("quotesArray");

i = 0;
setInterval(nextQuote, 5000);
headerQuotes.innerHTML = `"${allQuotes[0]}" - `
// Funksjonen for quotes
function nextQuote(){
  headerQuotes.innerHTML = `"${allQuotes[i]}" - `;
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
    let bildeURL = evt;
    posts.push({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        year: year,
        month: months[month],
        day: day,
        hour: hour,
        minute: minute,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        text: inpMelding.value,
        url:bildeURL
    });
    postMakerForm.reset();
}

function lastOppBilde(evt){
    evt.preventDefault();
    let fil = inpFile.files[0];
    let lagringsplass = storage.ref("bilder/"+ new Date());
    lagringsplass.put(fil)
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => lagreMelding(url));
}

// Funksjonene som viser meldingene
function showMessageNew(snap) {
    let post = snap.val();
    let id = "others";
    let key = snap.key;
    // Sjekker om denne meldingen kommer fra meg selv
    if(user.uid === post.uid) {
        id = "me";}
    let bilde = "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
    if(post.photoURL) {
        bilde = post.photoURL;
    }
    if(post.url.length < 2){
      var img = ".";
    } else{
      var img = post.url;
    }
    secAllPosts.innerHTML = `
        <section class="post" id="${id}">
          <section class="postInfo">
            <a href="user.html?id=${post.displayName}">
              <img class="postProfilePicture" src="${bilde}" title="${post.displayName}">
            </a>
            <div class="postND">
              <a href="user.html?id=${post.displayName}">
                <h1 class="postName">${post.displayName}</h1>
              </a>
              <p class="postDate">${post.day}. ${post.month} - ${post.hour}:${post.minute}</p>
            </div>
          </section>
          <p class="postText">${post.text}</p>
          <img class="postImg" src="${post.url}">
        </section>
    ` + secAllPosts.innerHTML;
}
function showMessageOld(snap) {
    let post = snap.val();
    let id = "others";
    let key = snap.key;
    // Sjekker om denne meldingen kommer fra meg selv
    if(user.uid === post.uid) {
        id = "me";
    }

    let bilde = "anonym.png";
    if(post.photoURL) {
        bilde = post.photoURL;
    }
    secAllPosts.innerHTML = secAllPosts.innerHTML + `
        <section class="post" id="${id}">
          <section class="postInfo">
            <a href="user.html?id=${post.displayName}">
              <img class="postProfilePicture" src="${bilde}" title="${post.displayName}">
            </a>
            <div class="postND">
              <a href="user.html?id=${post.displayName}">
                <h1 class="postName">${post.displayName}</h1>
              </a>
              <p class="postDate">${post.day}. ${post.month} - ${post.hour}:${post.minute}</p>
            </div>
          </section>
          <p class="postText">${post.text}
          <img class="postImg" src="${post.url}">
        </section>`;
}

// Sjekker om vi er logget inn
firebase.auth().onAuthStateChanged( newuser => {
    if (newuser) {
        // Setter user til den innloggede brukeren
        user = newuser;
        // Event Listeners
        postMakerForm.addEventListener("submit", lastOppBilde);
        posts.on("child_added", showMessageNew);

        signedIn.innerHTML = `You are signed in as <a href="user.html?id=${user.displayName}" id="logInName">${user.displayName}</a>`;
        registerButton.innerHTML = `Sign in with another account`;
    } else {
        signedIn.innerHTML = `Welcome to Plantr.<br>
        Start by signing in.`;
        registerButton.innerHTML = `Sign in with Google`;
    }
});

// Funksjoner som kjøres når sort-knappene trykkes
function newest() {
  secAllPosts.innerHTML = ``;
  posts.orderByChild("timestamp").on("child_added", showMessageNew);
}
function oldest() {
  secAllPosts.innerHTML = ``;
  posts.orderByChild("timestamp").on("child_added", showMessageOld);
}
