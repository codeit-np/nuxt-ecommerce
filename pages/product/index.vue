<template>
  <div class="py-10">
    <v-container>
      <v-row>
        <v-col cols="2">
          <h5 class="text-h5">Categories</h5>
          <category />
        </v-col>

        <v-col cols="10">
          <v-row>
            <v-col v-if="productStore.loading">
              <v-label>Pleaes wait while searching...</v-label>
              <v-progress-linear indeterminate="" />
            </v-col>
            <v-col
              v-else
              cols="4"
              v-for="product in productStore.allProducts"
              :key="product"
            >
              <latest-product-card :product="product" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useProductStore } from "~/store/product";
const productStore = useProductStore();
</script>

<style lang="scss" scoped>
</style>