<script>
export default {
  props: {
    cardImage: String,
    cardTitle: String,
    cardType: String,
  },
};
</script>

<template>
  <div class="card" :class="cardType">
    <img :src="cardImage" :alt="cardTitle" />
    <h4>{{ cardTitle }}</h4>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: white;
  padding: 1rem;
  text-align: center;

  img {
    max-width: 100%;
  }

  &.corta {
    border: 2px solid green;
  }

  &.lunga {
    border: 2px solid blue;
  }

  &.cortissima {
    border: 2px solid fuchsia;
  }
}
</style>
