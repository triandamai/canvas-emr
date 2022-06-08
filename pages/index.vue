<script setup lang="ts">
definePageMeta({
  middleware:['auth']
})
const {isLoggedIn} = useAuth()
const router = useRouter()

onMounted(()=>{
  if(isLoggedIn){
    router.replace('/main')    
  }
})
</script>

<template>
  <NuxtPage/>
</template>
