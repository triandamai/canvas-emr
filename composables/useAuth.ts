import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

export const useAuth = () => {
  const { $firebaseAuth } = useNuxtApp();
  const router = useRouter()
  function loginGoogle() {
    signInWithPopup($firebaseAuth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        saveSession(user)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    
      });
  }

  function loginGithub() {
    signInWithPopup($firebaseAuth, new GithubAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        saveSession(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        
      });
  }

  function loginFacebook() {
    signInWithPopup($firebaseAuth, new FacebookAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        saveSession(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  }

  function saveSession(user){
      window.sessionStorage.setItem('user',JSON.stringify(user))
      router.replace({path:'/main'})

  }
  function isLoggedIn(){
      return window.sessionStorage.getItem('user')
  }
  function logOut(){
      window.sessionStorage.removeItem('user')
      signOut($firebaseAuth)

      router.replace('/auth/login')
  }

  return {
    loginGoogle,
    loginGithub,
    loginFacebook,
    isLoggedIn,
    logOut
  };
};
