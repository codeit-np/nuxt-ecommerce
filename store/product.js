import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      featuredProducts: null,
      latestProducts: null,
      singleProduct: null,
      allProducts: null,
      loading: false,
    };
  },

  actions: {
    // Get Featured Product
    async fetchFeaturedProducts() {
      try {
        this.loading = true;
        var response = await axiosApi.get("featured-products");
        if (response.status == 200) {
          this.featuredProducts = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    //Get Latest Products
    async fetchLatestProducts() {
      try {
        this.loading = true;
        var response = await axiosApi.get("latest-products");
        if (response.status == 200) {
          this.latestProducts = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    //Get All Products
    async fetchAllProducts() {
      try {
        this.loading = true;
        var response = await axiosApi.get("products");
        if (response.status == 200) {
          this.allProducts = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    // Get Single Product by Id
    async fetchSingleProducts(id) {
      try {
        this.loading = true;
        var response = await axiosApi.get(`product/${id}`);
        if (response.status == 200) {
          this.singleProduct = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    async fetchProductBySubCategory(id) {
      try {
        this.loading = true;
        var response = await axiosApi.get(`subcategory/${id}`);
        if (response.status == 200) {
          this.allProducts = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
