<template>
  <MainLayout>
    <div
      id="ItemPage"
      class="mt-4 max-w-6xl mx-auto px-2 md:px-4 lg:px-6 xl:px-8"
    >
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[40%]">
          <NuxtImg
            v-if="currentImage"
            class="rounded-lg object-cover h-96 w-full"
            height="100"
            :src="currentImage"
            placeholder=""
          />
          <!-- selector -->
          <div
            v-if="images[0] !== ''"
            class="relative flex items-center justify-center mt-2 gap-2"
          >
            <button
              v-if="currentIndex > 0"
              @click="prevImage"
              class="absolute left-0 z-10 bg-gray-200 text-white px-2 py-2 rounded-full flex items-center justify-center"
            >
              <Icon
                name="ic:baseline-arrow-back-ios"
                color="#FF5353"
                class="text-center pl-1 scale-125 hover:scale-150"
              />
            </button>
            <div class="flex items-center gap-2">
              <div
                v-for="(image, index) in visibleImages"
                :key="index"
                @mouseover="currentImage = image"
                @click="currentImage = image"
                class="cursor-pointer"
              >
                <NuxtImg
                  width="70"
                  class="rounded-md object-cover border-[3px]"
                  :class="[
                    currentImage === image
                      ? 'border-[#FF5353]'
                      : 'border-transparent',
                    index === 0 || index === 4
                      ? 'scale-75 hidden sm:block md:hidden xl:block'
                      : '',
                    index === 1 || index === 3
                      ? 'scale-75 sm:scale-100 md:scale-75 xl:scale-100'
                      : '',
                  ]"
                  :src="image"
                />
              </div>
            </div>
            <button
              v-if="currentIndex + 3 < images.length"
              @click="nextImage"
              class="absolute right-0 bg-gray-200 text-white px-2 py-2 rounded-full flex items-center justify-center hover:scale-110"
            >
              <Icon
                name="ic:baseline-arrow-forward-ios"
                color="#FF5353"
                class="hover:scale-125"
              />
            </button>
          </div>
        </div>
        <div class="md:w-[60%] bg-white p-3 rounded-lg">
          <div v-if="product && product.data">
            <p class="mb-2 font-semibold text-xl">{{ product.data.title }}</p>
            <p class="font-light text-[12px] mb-2">
              {{ product.data.description }}
            </p>
          </div>

          <div class="flex items-center pt-1.5">
            <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
              <Icon
                name="material-symbols:star-rounded"
                class="-mt-[17px]"
                size="12"
              />
            </span>
            <p class="text-[#FF5353]">Extra 5% off</p>
          </div>

          <div class="flex items-center justify-start my-2">
            <Icon name="ic:baseline-star" color="#FF5353" />
            <Icon name="ic:baseline-star" color="#FF5353" />
            <Icon name="ic:baseline-star" color="#FF5353" />
            <Icon name="ic:baseline-star" color="#FF5353" />
            <Icon name="ic:baseline-star" color="#FF5353" />
            <span class="text-[13px] font-light ml-2"
              >5,213 Reviews 1,000+ orders</span
            >
          </div>

          <div class="border-b" />

          <div class="flex items-center justify-start gap-2 my-2">
            <div class="text-xl font-bold">$ {{ priceComputed }}</div>
            <span
              class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm"
              >70% off</span
            >
          </div>

          <p class="text-[#009A66] text-xs font-semibold pt-1">
            Free 11-day delivery over ￡8.28
          </p>

          <p class="text-[#009A66] text-xs font-semibold pt-1">Free Shipping</p>

          <div class="py-2" />

          <button
            @click="addToCart()"
            :disabled="isInCart"
            class="px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-[#FF851A] to-[#FFAC2C]"
          >
            <div v-if="isInCart">Is Added</div>
            <div v-else>Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const route = useRoute();

let product = ref(null);
let currentImage = ref("null");
let images = ref([]);

onBeforeMount(async () => {
  product.value = await useFetch(`/api/get-product-by-id/${route.params.id}`);
  console.log("product", product.value);
});

watchEffect(() => {
  if (product.value && product.value.data) {
    currentImage.value = product.value.data.url;
    images.value[0] = product.value.data.url;
    userStore.isLoading = false;
  }
});

// const isInCart = computed(() => {
//   let res = false;
//   userStore.cart.forEach((prod) => {
//     if (route.params.id == prod.id) {
//       res = true;
//     }
//   });
//   return res;
// });

const priceComputed = computed(() => {
  if (product.value && product.value.data) {
    console.log("priceComputed", product.value.data.price / 100);
    return product.value.data.price / 100;
  }
  return "0.00";
});

images.value = [
  ...images.value,
  ...[
    "",
    "https://picsum.photos/id/233/800/800",
    "https://picsum.photos/id/165/800/800",
    "https://picsum.photos/id/99/800/800",
    "https://picsum.photos/id/144/800/800",
    "https://picsum.photos/id/212/800/800",
    "https://picsum.photos/id/233/800/800",
    "https://picsum.photos/id/165/800/800",
    "https://picsum.photos/id/99/800/800",
    "https://picsum.photos/id/144/800/800",
  ],
];
const currentIndex = ref(0);
const visibleImages = computed(() =>
  images.value.slice(currentIndex.value, currentIndex.value + 5)
);

const addToCart = () => {
  userStore.cart.push(product.value.data);
};
const nextImage = () => {
  if (currentIndex.value + 3 < images.value.length) {
    currentIndex.value++;
  }
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style scoped>
.carousel-btn {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
