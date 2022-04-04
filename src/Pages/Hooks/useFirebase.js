
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializationAuth from "../Firebase/firebase.init";

initializationAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  // google sign in with button
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  // create account with email and passsword
  const createEmailandPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailandPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out user
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }

      setIsLoading(false);
    });
    return () => unsubcribed;
  }, []);

  return {
    googleSignIn,
    user,
    logOut,
    createEmailandPassword,
    signInEmailandPassword,
    setIsLoading,
    isLoading,
  };
};

export default useFirebase;
