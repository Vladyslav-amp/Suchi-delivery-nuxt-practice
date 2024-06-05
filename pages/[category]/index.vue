<script setup>
// Import
import { ref } from 'vue';
import filters from "@/helpers/js/filters";
import subcategoryData from "@/assets/subcategories.json";

// Using ref to store subcategory data
const subcategoryDataRef = ref(subcategoryData);

// Route parameters
const route = useRoute();

// Filtered subcategories based on the "category_slug"
const filteredSubcategories = computed(() => {
  return filters.filterArrayByKey(
    subcategoryDataRef.value,
    "category_slug",
    route.params.category 
  );
});
</script>

<template>
  <section class="subcategories">
    <SubcategoryCard
      class="subcategories__card"
      v-for="subcategory in filteredSubcategories"
      :key="subcategory.id"
      :subcategory="subcategory"
    />
  </section>

  <PanelCartTotal :btnroute="{ name: 'cart' }" btntext="Go to Cart" />
</template>

<style lang="scss" scoped>
.subcategories {
  display: flex;
  flex-wrap: wrap;
  padding-left: 15px;
  padding-right: 15px;

  padding-bottom: 150px;
}
</style>
