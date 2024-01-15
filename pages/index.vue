<template>
  <div>
    <!-- Carousel -->
    <slide />

    <!-- Featured Products -->
    <section>
      <v-container>
        <h1 class="text-2xl">Featured Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dicta?
        </p>
        <v-row class="mt-5">
          <v-col
            cols="4"
            v-for="product in productStore.featuredProducts"
            :key="product"
          >
            <product-card :product="product" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Latest Products -->
    <section>
      <v-container>
        <h1 class="text-2xl">Latest Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dicta?
        </p>
        <v-row class="mt-5">
          <v-col
            cols="4"
            v-for="product in productStore.featuredProducts"
            :key="product"
          >
            <latest-product-card :product="product" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useProductStore } from "~/store/product";
const productStore = useProductStore();
</script>

<style lang="scss" scoped>
</style>