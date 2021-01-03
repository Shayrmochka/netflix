import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsfGk4Wn4C2f812lSAaKT1oqvQTT7ljjI",
  authDomain: "netflix-e8ee3.firebaseapp.com",
  databaseURL: "https://netflix-e8ee3-default-rtdb.firebaseio.com",
  projectId: "netflix-e8ee3",
  storageBucket: "netflix-e8ee3.appspot.com",
  messagingSenderId: "153957713094",
  appId: "1:153957713094:web:cf77fded9afd10dc37c3c7",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
