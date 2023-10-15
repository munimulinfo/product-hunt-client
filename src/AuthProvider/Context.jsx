import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    const emailVerification = (currentUser) => {
      setLoading(true);
      return sendEmailVerification(currentUser);
    };
  
    const resetPassword = (email) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
    };
  
    const emailUpdate = (email) => {
      setLoading(true);
      return updateEmail(auth.currentUser, email);
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    const updateUserProfile = (name) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
      });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          return unsubscribe();
        };
      }, []);

    const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      resetPassword,
      logOut,
      updateUserProfile,
      emailVerification,
      emailUpdate,
      };

    return (
        <AuthContext.Provider value={authInfo}>{ children }</AuthContext.Provider>
    );
};

export default Context;