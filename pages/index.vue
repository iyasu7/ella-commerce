<script lang="ts" setup>
import MainLayout from '~/layouts/MainLayout.vue';
// const { data: products } = await useFetch('/api/prisma/products')

// const { data: products } = await useFetch('/api/products')
const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Anim duis sit cillum aliquip. Eiusmod esse sit duis minim duis nulla enim ipsum in amet cupidatat excepteur. Voluptate nostrud consequat quis dolor ex nulla exercitation mollit proident duis eiusmod nisi. Ea sint proident non esse dolore est consequat dolore aliquip culpa.',
    url: 'https://via.placeholder.com/300x300',
    price: 1999
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://via.placeholder.com/300x300',
    price: 2999
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'https://via.placeholder.com/300x300',
    price: 3999
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'https://via.placeholder.com/300x300',
    price: 4999
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'https://via.placeholder.com/300x300',
    price: 5999
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'https://via.placeholder.com/300x300',
    price: 6999
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'https://via.placeholder.com/300x300',
    price: 7999
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'https://via.placeholder.com/300x300',
    price: 8999
  },
  {
    id: 9,
    title: 'Product 9',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'https://via.placeholder.com/300x300',
    price: 9999
  }
]
</script>

<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product.id">
        <!-- <div v-if="products" v-for="product in products.data" :key="product"> -->
                  <Product :product="product"/>
              </div>
      </div>
    </div>
  </MainLayout>
</template>
