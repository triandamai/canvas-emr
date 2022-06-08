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
        apiKey: "",

        authDomain: "",
      
        projectId: "",
      
        storageBucket: "",
      
        messagingSenderId: "",
      
        appId: "",
      
        measurementId: ""
      
      
      });
      nuxtApp.provide('firebaseApp',app)
      nuxtApp.provide('firebaseAuth',getAuth(app))
      nuxtApp.provide('firestore',getFirestore(app))
      
})
