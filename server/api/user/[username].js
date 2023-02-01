
export default defineEventHandler(async (event) => {
const {username} = event.context.params




const data= await $fetch(useRuntimeConfig().apiUrl+"tiktok_user/"+username)

  return  data
})

