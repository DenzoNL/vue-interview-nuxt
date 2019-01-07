<template>
  <b-container>
    <div id="item">
      <Menu></Menu>

      <b-row>
        <b-col>
          <b-card :title="decryptedItem[0]" sub-title="SHA-256 Hash:">
            <p class="card-text">{{ decryptedItem[1] }}</p>
            <b-link :to="'/'" class="card-link">Back to list</b-link>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <Footer></Footer>
  </b-container>
</template>
<script>
import Menu from "~/components/Menu";
import Item from "~/components/Item";
import Footer from "~/components/Footer";

export default {
  name: "item",
  components: {
    Menu,
    Footer
  },

  computed: {
    decryptedItem: function() {
      let id = this.$route.params.id;

      if (localStorage.items == null) {
        return ["No items have been addes yet.", ""];
      }

      let items = JSON.parse(localStorage.items);

      if (id > items.length) {
        return ["This item does not exist", ""];
      }

      return items[id];
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/scss/_variables.scss";
html,
body {
  /* Add extra top margin so it doesn't get covered by the sticky navbar. */
  margin-top: 5rem;
  padding: 0;
}

#item {
  font-family: $fonts;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
</style>