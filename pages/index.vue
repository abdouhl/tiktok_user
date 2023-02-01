<script setup>
const user = reactive({ username:"" })
var next_user =null
next_user = computed(() => {

    if(!user.username){
    return null
    }else{
    return  "/"+user.username
    }
})
useHead({
  title: 'Tiktok User Data ',
  link: [
    {rel: 'preconnect', type: 'text/css', href: 'https://fonts.googleapis.com'},
    {rel: 'preconnect', crossorigin: true, href: 'https://fonts.gstatic.com'},
    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Signika+Negative:wght@600&display=swap'},
  ]
})
</script>
<template>
  
  <div class="grid content-center w-screen h-screen" >
    <div class="px-2 md:px-24 lg:px-36 w-full h-fit max-w-5xl mx-auto py-2 md:py-4">
      <h1 style="font-family: 'Signika Negative', sans-serif;" class="text-center text-5xl md:text-7xl">Tiktok User Data</h1>
      <p class="text-l md:text-xl mt-4 mb-8 text-center text-slate-400" >Get Tiktok User Informations:"Name, Username, followers, following, Likes, Videos, Country"</p>
      <div id="post-form" class="mt-8 mb-2 w-full flex flex-row gap-2 md:gap-4">
      
      <input class="mb-2 p-2 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400 focus:placeholder-transparent focus:outline-none" placeholder="Search for TikTok Username" v-model="user.username">
      <NuxtLink class="bg-slate-500 rounded-lg mb-2 p-2 text-white" :to="next_user">Search</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@600&display=swap');

body {
background-color: #f1f5f9;
}

</style>
