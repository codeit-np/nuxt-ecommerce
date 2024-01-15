import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useCategoryStore = defineStore("category", {
  state: () => {
    return {
      categories: null,
      loading: false,
    };
  },

  actions: {
    // Get Featured Product
    async fetchCategories() {
      try {
        this.loading = true;
        var response = await axiosApi.get("categories");
        if (response.status == 200) {
          this.categories = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
