<script setup>
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import {  getName } from 'country-list'

const {username} = useRoute().params

const user = reactive({ username:username,nextusername:'' })
var {pending,data} = useLazyFetch('/api/user/'+user.username,{key: user.username})

var next_user =null
next_user = computed(() => {

    if(!user.nextusername){
    return null
    }else{
    return  "/"+user.nextusername
    }
})


</script>
<template>
  <div
    v-if="pending"
    class="w-screen h-screen grid content-center justify-center"
  >
    <div role="status" class="w-fit">
      <svg
        class="inline mr-2 w-16 h-16 text-stone-100 animate-spin fill-black mx-auto"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div v-else class="grid content-center w-screen h-screen">
    <div class="px-2 md:px-24 lg:px-36 w-full max-w-5xl mx-auto py-2 md:py-4">
      <div id="post-form" class="mb-4 w-full flex flex-row gap-2 md:gap-4">
      
      <input class="mb-2 p-2 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400 focus:placeholder-transparent focus:outline-none" placeholder="Search for TikTok Username" v-model="user.nextusername">
      <NuxtLink class="bg-slate-500 rounded-lg mb-2 p-2 text-white" :to="next_user">Search</NuxtLink>
      </div>
      <div v-if="data.error" class="col-span-1 rounded-lg bg-white p-2 text-slate-400 p-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="mx-auto mb-8" viewBox="0 0 16 16">
          <path d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465l3.465-3.465Zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
        </svg>
      
      <p class="text-3xl text-center">User Not Found</p>
      </div>
      <div v-if="!data.error" class="col-span-1 rounded-lg bg-white p-4 border-2 border-slate-300 border-dashed ring-4 ring-white">
        <img
            class="rounded-full border border-2 border-white h-16 md:h-28 mx-auto outline-dashed outline-2 outline-offset-2 outline-slate-300"
            :src="data.image"
          />
        <p class="mt-4 my-2 pl-2 text-l md:text-xl" ><span class="text-slate-500 font-bold">Name: </span>{{data.name}}</p>
        <p class="pl-2 my-2 text-l md:text-xl" ><span class="text-slate-500 font-bold">Username: </span>{{data.username}}</p>
        <p class="pl-2 my-2 text-l md:text-xl" ><span class="text-slate-500 font-bold">Bio: </span>{{data.bio}}</p>
        <p class="pl-2 my-2 text-l md:text-xl" ><span class="text-slate-500 font-bold">followers: </span>{{data.followers}}</p>
        <p class="pl-2 my-2 text-l md:text-xl" ><span class="text-slate-500 font-bold">following: </span>{{data.following}}</p>
        <p class="pl-2 my-2 text-l md:text-xl" ><span class="text-slate-500 font-bold">Likes: </span>{{data.likes}}</p>
        <p class="pl-2 my-2 text-l md:text-xl" ><span class="text-slate-500 font-bold">Videos: </span>{{data.videos}}</p>
        <p class="pl-2 my-2 text-l md:text-xl" ><span class="text-slate-500 font-bold">Country: </span>{{data.country}}</p>
        
      </div>



    </div>
  </div>
</template>

<style>

body {
background-color: #f1f5f9;
}

</style>
