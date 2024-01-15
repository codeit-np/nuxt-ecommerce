<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="align-end text-white"
      height="200"
      :src="product.images[0]"
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">Rs.{{ product.price }}</v-card-subtitle>

    <v-card-text>
      <div>{{ product.name }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" :to="`/product/${product.id}`">
        PRODUCT DETAILS
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  product: null,
});
</script>