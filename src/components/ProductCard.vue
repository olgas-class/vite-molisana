<script>
export default {
  props: {
    title: String,
    image: String,
    type: String
  },
};
</script>

<template>
  <div class="card" :class="type">
    <img :src="image" alt="" />
    <h3>{{ title }}</h3>
  </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
.card {
    background-color: white;
    height: 100%;

    img {
        width: 100%;
    }

    h3 {
        text-align: center;
        color: $primary;
    }

    &.corta {
        background-color: lightblue;
    }

    &.lunga  {
        background-color: lightgreen;
    }

    &.cortissima {
        background-color: lightpink;
    }
}
</style>
