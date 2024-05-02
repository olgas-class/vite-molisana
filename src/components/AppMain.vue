<script>
export default {};
</script>

<template>
  <section class="products">
    <h2>Content goes here</h2>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;

.products {
  margin-top: 4rem;
  padding: 5rem 0;
  background-image: url(../assets/img/fondo-pag-speciali.jpg);

  @include flex(row, center, center);
}
</style>
