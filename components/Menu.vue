<template>
  <!-- 

    (MUST)
    1. Changed "menu" to "To Do List"
    2. Changed the div to the Bootstrap 4 navbar.
    3. Vertically and horizontally centered the menu bar text.
    4. Made menu-bar sticky.
    5. Added a shadow to the menu-bar

  -->
  <nav class="navbar navbar-light fixed-top shadow-sm">
    <span class="navbar-brand mb-0 h1 mx-auto">To Do List</span>
  </nav>
</template>
<style lang="scss">
@import "~/assets/scss/_variables.scss";
.navbar {
  background: $menu-bg;
  height: 4rem;
}
</style>