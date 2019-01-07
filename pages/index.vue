<template>
  <div class="container">

    <div id="app">
      <Menu></Menu>

      <ItemCreator @addItem="addItem"></ItemCreator>

      <!-- Convert Input and Button to Bootstrap 4 equivalent. -->
      <!-- Listen to removeItem() emits from the Item component -->
      <Item
        v-for="item in items"
        :key="item[0]"
        :item="item"
        @removeItem="removeItem"
      >{{item}}</Item>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Menu from "~/components/Menu";
import Item from "~/components/Item";
import Footer from "~/components/Footer";
import ItemCreator from "~/components/ItemCreator";

// Import the SHA256 encryption library.
import SHA256 from "crypto-js/sha256";

export default {
  name: "app",
  components: {
    Menu,
    Item,
    Footer,
    ItemCreator
  },

  // Store items in localStorage upon change.

  watch: {
    items(newItems) {
      localStorage.items = JSON.stringify(newItems); // localStorage only supports strings.
    }
  },

  data() {
    return {
      newItem: "",
      items: []
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
      this.items.push([newItem, SHA256(newItem).toString()]);
    },

    // Callback to remove an item from the list.
    removeItem(itemToBeRemoved) {
      // Filter the array with the item to be removed
      this.items = this.items.filter(item => item !== itemToBeRemoved);
    }
  },

  // Upon mounting the component, load items from localStorage
  mounted() {
    if (localStorage.items) {
      this.items = JSON.parse(localStorage.items); // localStorage only supports strings.
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

* {
  box-sizing: border-box;
}
#app {
  font-family: $fonts;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}

#app .item-creator {
  height: 4rem;
  line-height: 4rem;
}
</style>
