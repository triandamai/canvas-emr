import { onAuthStateChanged } from "firebase/auth"

export default defineNuxtRouteMiddleware((to,from)=>{
    const {isLoggedIn} = useAuth()
    if(!isLoggedIn() || isLoggedIn() == ''){
        return navigateTo('/auth/login')
    }
    
})