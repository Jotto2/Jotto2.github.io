let main = document.getElementById("userPosts");
let signedIn = document.querySelector("#signedInText");
let registerButton = document.getElementById("registerButton");
let userP = document.getElementById("userProfile");
let title = document.querySelector("title");

// Koden som henter key-verdien fra forrige side:
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

// Firebase referanser //
let db = firebase.database();
let posts = db.ref("posts");
let plantsInfo = db.ref("plantsInfo");

let user;

// Funksjonene som viser meldingene
function showProfilePost(snap) {
    let post = snap.val();
    let key = snap.key;
    let picture = "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
    if(post.photoURL) {
        picture = post.photoURL;
    }
    main.innerHTML = `
        <section class="post">
          <section class="postInfo">
            <a href="user.html?id=${post.displayName}">
              <img class="postProfilePicture" src="${picture}">
            </a>
            <div class="postND">
              <a href="user.html?id=${post.displayName}">
                <h1 class="postName">${post.displayName}</h1>
              </a>
              <p class="postDate">${post.day}. ${post.month} - ${post.hour}:${post.minute}</p>
            </div>
          </section>
          <p class="postText">${post.text}
        </section>` + main.innerHTML;
    userP.innerHTML = `
    <img id="userProfilePicture" src="${picture}">
    <h1 id="profileName">${post.displayName}</h1>
    <p id="profileMail">${post.email}</p>
    `;
    title.innerHTML = `Plantr | ${post.displayName}`;
}

// Sjekker om vi er logget inn
firebase.auth().onAuthStateChanged( newuser => {
    if (newuser) {
        user = newuser;
        posts.orderByChild("displayName").equalTo(id).on("child_added", showProfilePost);
        signedIn.innerHTML = `You are signed in as <a href="user.html?id=${user.displayName}" id="logInName">${user.displayName}</a>`;
        registerButton.innerHTML = `Sign in with another account`;
    } else {
        signedIn.innerHTML = `Welcome to Plantr.<br>
        Start by signing in.`;
        registerButton.innerHTML = `Sign in with Google`;
    }
});
