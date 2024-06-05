<script setup>
// Pobieramy dane koszyka
const useStateCart = useState("stateCart");
const cartItems = useStateCart.value;

</script>

<template>
  <div class="cart">
    <div v-if="cartItems.length === 0">
      <h2 class="cart-head">
        Cart is empty...
      </h2>
    </div>

    <div v-else>
      <ProductCard 
        v-for="cartProduct in cartItems"
        :key="cartProduct.id"
        :product="cartProduct"
      />
    </div>
  </div>

  <PanelCartTotal
    :class="{ disabled: cartItems.length === 0 }"

  />
</template>

<style lang="scss" scoped>
.cart {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 150px;

  &-head {
    text-align: center;
    opacity: .5;
    margin-top: 50%;
  }
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
