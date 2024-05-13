<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "Home",
          routeName: "home",
        },
        {
          title: "Prodotti",
          routeName: "products",
        },
        {
          title: "Chi siamo",
          routeName: "about",
        },
        {
          title: "Contatti",
          routeName: "contacts",
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
        <!-- <a href="" :class="{ active: item.isActive }">{{ item.title }}</a> -->
        <router-link :to="{ name: item.routeName }" class="nav-link">{{
          item.title
        }}</router-link>
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

  .router-link-active {
    color: green;
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
