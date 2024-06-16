// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      // supabaseUrl: process.env.SUPABASE_URL,
      // supabaseKey: process.env.SUPABASE_KEY,
      // stripeKey: process.env.STRIPE_KEY,
    }
  },
  modules: [
    // "@nuxtjs/supabase",
    "@pinia/nuxt",
    "nuxt-lodash",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],
  app: {
    head: {
      title: "Ella Commerce",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [{ src: "https://js.stripe.com/v3", defer: true }],
    },
  },
});
