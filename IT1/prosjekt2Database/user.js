const main = document.querySelector("userPosts");

// Koden som henter key-verdien fra forrige side:
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

const db = firebase.database();
const pokemon = db.ref("pokemon/" + id );
