<template>
  <!-- 

    (MUST)
    1. Changed "menu" to "To Do List"
    2. Changed the div to the Bootstrap 4 navbar.
    3. Vertically and horizontally centered the menu bar text.
    4. Made menu-bar sticky.
    5. Added a shadow to the menu-bar

  -->
  <b-navbar type="light" class="fixed-top shadow-sm">
    <span class="navbar-brand mx-auto">To Do List</span>
  </b-navbar>
</template>
<style lang="scss">
@import "~/assets/scss/_variables.scss";
.navbar {
  background: $menu-bg;
  height: 4rem;
}
</style>