import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import {  getName } from 'country-list'
export default defineEventHandler(async (event) => {
const {username} = event.context.params




const data= await $fetch(useRuntimeConfig().apiUrl+"tiktok_user/"+username)

var result={
  error: true,
  image: '',
  name: '',
  username: '',
  bio: '',
  followers: '',
  following: '',
  likes: '',
  videos: '',
  country: '',
}

if (!data.error){
result={
  error: false,
  image: data.data.users[
    username
  ].avatarThumb,
  name: data.data.users[
    username
  ].nickname,
  username: data.data.users[
    username
  ].uniqueId,
  bio: data.data.users[
    username
  ].signature,
  followers: data.data.stats[
    username
  ].followerCount,
  following: data.data.stats[
    username
  ].followingCount,
  likes: data.data.stats[
    username
  ].heartCount,
  videos: data.data.stats[
    username
  ].videoCount,
  country: data.data.users[username].region==''? "" : getName(data.data.users[username].region)+' '+getUnicodeFlagIcon(data.data.users[username].region),
}
}
    return  result
})

