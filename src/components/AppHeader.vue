<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "Home",
          isActive: false,
        },
        {
          title: "Prodotti",
          isActive: true,
        },
        {
          title: "Chi siamo",
          isActive: false,
        },
        {
          title: "Contatti",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="header-logo">
      <img
        src="../assets/img/la-molisana-logo.png"
        alt="Logo  della molisana"
      />
    </div>
    <ul class="navigation">
      <li v-for="item in menu">
        <a href="" :class="{ active: item.isActive }">{{ item.title }}</a>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

header {
  .header-logo {
    text-align: center;
  }

  ul {
    @include flex(row, center, center);
    list-style-type: none;
    gap: 1rem;
    margin-top: 26px;

    a {
      padding: 10px 16px;
      text-decoration: none;
      color: $text-color;
      display: inline-block;

      &:hover {
        color: $primary-dark;
      }

      &.active {
        background-color: $primary-color;
      }
    }
  }
}
</style>
