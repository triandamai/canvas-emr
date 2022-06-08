import {initializeApp,FirebaseApp} from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth';
import {Firestore, getFirestore} from 'firebase/firestore'

declare module '#app' {
  interface NuxtApp {
    $firebaseApp: FirebaseApp;
    $firebaseAuth:Auth,
    $firestore:Firestore
  }
}



export default defineNuxtPlugin(nuxtApp=>{
    const app = initializeApp({
        apiKey: "AIzaSyC8saPftAbIpW62aA7EdoIBWqiiUVSfCTM",

        authDomain: "tudu-app-5eb1f.firebaseapp.com",
      
        projectId: "tudu-app-5eb1f",
      
        storageBucket: "tudu-app-5eb1f.appspot.com",
      
        messagingSenderId: "496234949728",
      
        appId: "1:496234949728:web:23d5e9e5c6e7122ed96705",
      
        measurementId: "G-DLQS16NJBD"
      
      
      });
      nuxtApp.provide('firebaseApp',app)
      nuxtApp.provide('firebaseAuth',getAuth(app))
      nuxtApp.provide('firestore',getFirestore(app))
      
})