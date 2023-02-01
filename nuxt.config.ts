// https://nuxt.com/docs/api/configuration/nuxt-config
// yarn build  .nuxt/dist yarn install

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiUrl: process.env.API_URL,
  },
  //app: { head: { link: [ {rel: 'icon',href: '/favicon.svg'} ] } },
  css: [
    '@/assets/css/main.css',
  ],
  nitro: {
    preset: "vercel",
  },
})
