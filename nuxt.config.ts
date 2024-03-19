// https://nuxt.com/docs/api/configuration/nuxt-config
import graphql from "@rollup/plugin-graphql";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    hasuraEndPoint: "",
    public: {
      hasuraEndPoint: "",
      accessToken: process.env.ACCESS_TOKEN,
    },
  },
  modules: ["nuxt-icon", "@pinia/nuxt", "@nuxtjs/apollo"],
  vite: { plugins: [graphql()] },

  apollo: {
    autoImports: true,
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: `${process.env.HASURA_END_POINT}`,
      },
    },
  },
});
