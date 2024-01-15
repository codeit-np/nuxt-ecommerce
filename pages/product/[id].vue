<template>
  <div class="py-5">
    <v-container>
      <v-row>
        <v-col cols="6">
          <product-slide />
        </v-col>
        <v-col cols="6">
          <h1 class="text-h5">{{ productStore.singleProduct.name }}</h1>
          <h2>Rs.{{ productStore.singleProduct.price }}</h2>
          <div
            class="list"
            v-html="productStore.singleProduct.description"
          ></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const route = useRoute();
import { useProductStore } from "~/store/product";
const productStore = useProductStore();
await productStore.fetchSingleProducts(route.params.id);
</script>

<style scoped>
:deep(.list ul) {
  list-style-type: circle;
}

:deep(.list ul li) {
  margin-left: 10px;
}
</style>