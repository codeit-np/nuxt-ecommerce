<template>
  <v-list>
    <v-list-item v-for="category in categoryStore.categories" :key="category">
      <v-list-item-title class="font-weight-bold">{{
        category.name
      }}</v-list-item-title>
      <v-list v-for="subcategory in category.sub_categories" :key="subcategory">
        <v-list-item
          link=""
          @click="productStore.fetchProductBySubCategory(subcategory.id)"
        >
          <v-list-item-title>{{ subcategory.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useCategoryStore } from "~/store/category";
import { useProductStore } from "~/store/product";
const categoryStore = useCategoryStore();
const productStore = useProductStore();
await categoryStore.fetchCategories();
await productStore.fetchAllProducts();
</script>

<style lang="scss" scoped>
</style>