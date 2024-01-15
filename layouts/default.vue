<template>
  <v-app>
    <nuxt-loading-indicator />
    <!-- Header -->
    <toolbar />
    <!-- Main -->
    <slot />
    <!-- Footer -->
  </v-app>
</template>

<script setup>
import { useProductStore } from "~/store/product";
const productStore = useProductStore();
await productStore.fetchFeaturedProducts();
</script>

<style lang="scss" scoped>
</style>