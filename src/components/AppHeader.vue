<script>
export default {
  data() {
    return {
      navItems: [
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
    <div class="logo">
      <img src="../assets/img/la-molisana-logo.png" alt="Logo Molisana" />
    </div>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.title">
          <a :class="{ active: item.isActive }" href="">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

header {
  padding: 1rem;


  @include respond('md') {
    background-color: lightgreen;
  }

  @include respond('sm') {
    background-color: lightpink;
  }

  .logo {
    text-align: center;

    img {
      width: 200px;
    }
  }

  ul {
    margin-top: 2rem;
    @include flex();
    list-style: none;
    gap: 1rem;

    a {
      padding: 1rem;
      text-decoration: none;
      color: black;

      &:hover {
        background-color: lighten($primary, 70%);
      }

      &.active {
        background-color: lighten($primary, 50%);
      }
    }
  }
}
</style>
