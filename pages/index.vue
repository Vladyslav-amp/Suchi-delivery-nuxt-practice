<script setup>
// Environment Variables
const runtimeConfig = useRuntimeConfig();


// States
const useStateCategories = useState("stateCategories");

</script>

<template>
  <section class="categories">
    <CategoryCard
      class="categories__card"
      v-for="category in useStateCategories"
      :category="category"
    />
  </section>

  <PanelCartTotal :btnroute="{ name: 'cart' }" btntext="Go to Cart" />

</template>

<style lang="scss" scoped>
.categories {
  display: flex;
  flex-wrap: wrap;
  padding-left: 15px;
  padding-right: 15px;

  padding-bottom: 150px;
}
</style>
