
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAte29CzcZoFXXoVjZdAAfO9rDasUc3_Ds",
  authDomain: "chill-chill-yogafire.firebaseapp.com",
  projectId: "chill-chill-yogafire",
  storageBucket: "chill-chill-yogafire.appspot.com",
  messagingSenderId: "817240197664",
  appId: "1:817240197664:web:6684b8b136ae6705688a45"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{ auth, provider };