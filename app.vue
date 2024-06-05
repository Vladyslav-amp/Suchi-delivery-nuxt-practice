<script setup>
// Import
import orderArray from "@/helpers/js/orderArray";
import filters from "@/helpers/js/filters";
import categoriesData from "@/assets/categories.json";
import subcategoriesData from "@/assets/subcategories.json";
import productsData from "@/assets/products.json";

// Environment Variables
const runtimeConfig = useRuntimeConfig();


// Data transformation (if needed)
const transformedCategories = orderArray(categoriesData, "sort_weight"); // Ordering categories data
const transformedSubcategories = orderArray(subcategoriesData, "sort_weight"); // Ordering subcategories data
const transformedProducts = filters.filterArrayByKey( // Filtering and ordering products data
  orderArray(productsData, "sort_weight"),
  "activity",
  "1"
);

const categories = transformedCategories;
const subcategories = transformedSubcategories;
const products = transformedProducts;


// States
const useStateCategores = useState("stateCategories", () => categories);
const useStateSubcategories = useState(
  "stateSubcategories",
  () => subcategories
);
const useStateProducts = useState("stateProducts", () => products);
const useStateCart = useState("stateCart", () => []);
const useStateCartQuantity = useState("stateCartQuantity", () => 0);
const useStateCartPrice = useState("stateCartPrice", () => 0);
const useStateCartProducts = useState("stateCartProducts", () => []);
const useStateFavorites = useState("stateFavorites", () => []);

</script>

<template>
  <div class="container">
    <AppHeader />

    <NuxtPage />
  </div>

</template>

<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 500px;
}
</style>
