import Rebase from 're-base'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARUjn8XcCqxzffrZmNalv7ltl07MCGr98",
    authDomain: "jewelry-moskow.firebaseapp.com",
    databaseURL: "https://jewelry-moskow-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(fireBaseApp.database())

export { fireBaseApp };

export default base