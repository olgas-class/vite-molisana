<script>
import { productsArray, title } from "../assets/data/products.js";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: productsArray,
    };
  },
};
</script>

<template>
  <section class="products">
    <h2>Nostri prodotti</h2>

    <div class="row">
      <div class="col" v-for="prod in products">
        <ProductCard
          :cardImage="prod.src"
          :cardTitle="prod.titolo"
          :cardType="prod.tipo"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;

.products {
  margin-top: 4rem;
  padding: 5rem 5rem;
  background-image: url(../assets/img/fondo-pag-speciali.jpg);

  @include flex(column, center, center);

  .row {
    @include flex(row, space-between, stretch, wrap);

    .col {
      width: 30%;
      margin-bottom: 1rem;
    }
  }
}
</style>
