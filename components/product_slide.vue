<template>
  <v-carousel height="400" hide-delimiters progress="primary">
    <v-carousel-item
      v-for="(slide, i) in productStore.singleProduct.images"
      :key="i"
    >
      <v-sheet height="100%">
        <v-img :src="slide"></v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { useProductStore } from "~/store/product";
const productStore = useProductStore();
</script>