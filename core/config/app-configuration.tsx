import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

export const AppConfiguration = {

}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbvj0ZjmFz6y5gkH5pYmO2NKpGwjyP2JU",
    authDomain: "aoi-db.firebaseapp.com",
    projectId: "aoi-db",
    storageBucket: "aoi-db.appspot.com",
    messagingSenderId: "1082368858584",
    appId: "1:1082368858584:web:359fe11b3f94e440d3faad",
    measurementId: "G-612L9B98GH"
  };

export function initializeFirebase(): void {
    // Initialize Firebase
    if (firebaseConfig.projectId) {
        const app = initializeApp(firebaseConfig);

        if (typeof window !== 'undefined') {
            const analytics = getAnalytics(app);        
        }

        const auth = getAuth(app);
        const db = getFirestore(app);
    }
}