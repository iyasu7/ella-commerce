<script lang="ts" setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

let products = ref(null);
onBeforeMount(async () => {
  products.value = await useFetch("/api/get-all-products");
  // products.value = data;
  setTimeout(() => (userStore.isLoading = false), 1000);
});
</script>

<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-6xl mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products.data" :key="product">
          <Product :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>
