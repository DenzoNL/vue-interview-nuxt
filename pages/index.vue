<template>
  <b-container>
    <div id="app">
      <Menu></Menu>

      <ItemCreator @addItem="addItem"></ItemCreator>

      <!-- Convert Input and Button to Bootstrap 4 equivalent. -->
      <!-- Listen to removeItem() emits from the Item component -->
      <Item
        v-for="(item, index) in items"
        :key="item.name"
        :item="item"
        :index="index"
        @removeItem="removeItem"
      ></Item>

      <Footer></Footer>
    </div>
  </b-container>
</template>

<script>
import Menu from "~/components/Menu";
import Item from "~/components/Item";
import Footer from "~/components/Footer";
import ItemCreator from "~/components/ItemCreator";

export default {
  name: "app",
  components: {
    Menu,
    Item,
    Footer,
    ItemCreator
  },

  // Store items in localStorage upon change.
  computed: {
    items() {
      return this.$store.state.items;
    }
  },

  data() {
    return {
      newItem: ""
    };
  },

  // Add a Method that appends an item to the 'items' list.
  methods: {
    addItem(newItem) {
      // Append new item to the 'items' list.
      //
      // Encrypt the data using SHA-256. As SHA-256 is one-way only
      // we cannot decrypt it so we must store a copy of the unencrypted contents as well.
      // This is NOT secure, so it would be better to use a two-way crypto algorithm.
      this.$store.commit("add", newItem);
    },

    // Callback to remove an item from the list.
    removeItem(itemToBeRemoved) {
      // Filter the array with the item to be removed
      this.$store.commit("remove", itemToBeRemoved);
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
html,
body {
  /* Add extra top margin so it doesn't get covered by the sticky navbar. */
  margin-top: 3rem;
  padding: 0;
}

* {
  box-sizing: border-box;
}
#app {
  font-family: $fonts;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}

#app .item-creator {
  height: 4rem;
  line-height: 4rem;
}
</style>
