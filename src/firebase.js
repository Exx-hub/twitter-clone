import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD6Qzc0kY1_2KmgRMgHzOvSSkPxBg0SyK8",
	authDomain: "twitter-clone-fa801.firebaseapp.com",
	databaseURL: "https://twitter-clone-fa801.firebaseio.com",
	projectId: "twitter-clone-fa801",
	storageBucket: "twitter-clone-fa801.appspot.com",
	messagingSenderId: "263416314191",
	appId: "1:263416314191:web:2b7dd0e64d0c84b0bb2d3a",
	measurementId: "G-G0N98QFBNY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
