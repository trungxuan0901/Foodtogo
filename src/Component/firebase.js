import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB00Nw2KUt32zFUAwuruGFlBqsBZJTkLW0",
    authDomain: "foodtogo-e327a.firebaseapp.com",
    projectId: "foodtogo-e327a",
    storageBucket: "foodtogo-e327a.appspot.com",
    messagingSenderId: "575296343390",
    appId: "1:575296343390:web:f826e82d658006daa993cf"

});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};