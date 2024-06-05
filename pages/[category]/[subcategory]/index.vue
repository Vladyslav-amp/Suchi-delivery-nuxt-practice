<script setup>
// Import
import filters from "@/helpers/js/filters";
import cart from "@/helpers/js/cart";
import product from "@/assets/products.json"; // Zaimportuj dane subkategorii

// Route parameters
const route = useRoute();

const productsData = ref(product);


// States
const useStateCart = useState("stateCart");
const useStateCartQuantity = useState("stateCartQuantity");
const useStateCartPrice = useState("stateCartPrice");
const useStateCartProducts = useState("stateCartProducts");

// Filtered product by "subcategory_slug"
const filteredProducts = filters.filterArrayByKey(
  productsData.value,
  "subcategory_slug",
  route.params.subcategory
);

// Watching changes in the cart
watch(
  useStateCart,
  () => {
    // Updating cart quantity, price, and products based on changes in the cart
    useStateCartQuantity.value = cart.calcCartQuantity(useStateCart.value);
    useStateCartPrice.value = cart.calcCartPrice(useStateCart.value);
    // Filtering cart products based on changes in the cart
    useStateCartProducts.value = filters.filterArrayByArray(
      filteredProducts,
      useStateCart.value
    );
  },
  { deep: true } // Deep watching to track changes in cart
);
</script>

<template>
  <section class="products">
    <ProductCard v-for="product in filteredProducts" :product="product" /> <!--Display product card for each filtered product-->
  </section>

  <PanelCartTotal :btnroute="{ name: 'cart' }" btntext="Go to Cart" />
</template>

<style lang="scss" scoped>
.products {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 150px;
}
</style>
