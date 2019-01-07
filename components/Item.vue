<template>
  <div class="item">
    <!-- Convert item to a bootstrap row for proper alignment -->
    <b-row @click="$router.push('/items/'+index)">
      <!-- Don't overflow text inside column -->
      <b-col class="d-inline-block text-truncate">
        <!-- Only display encrypted data. -->
        {{ item[1] }}
      </b-col>
      <b-col>
        <!-- There should be a Remove button in every Item (on the right). -->
        <!-- The Remove button should be red. -->
        <div class="float-right">
          <b-button size="sm" variant="danger" @click.stop="removeItem">Remove</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  // Add the item name as a prop.
  props: {
    item: Array,
    index: Number
  },
  methods: {
    // Emit an event to the parent component to remove this item.
    removeItem() {
      this.$emit("removeItem", this.item);
    },

    // Show a popup with the decrypted contents of the item.
    showDecryptedItem() {
      alert(this.item[0]);
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/scss/_variables.scss";

.item {
  height: 3rem;
  padding: 0.5rem 2rem;
  line-height: 2rem;
  border-bottom: 1px solid $item-border-color;
}

.item:hover {
  background-color: $item-hover !important;
}

.item:nth-child(even) {
  background-color: $item-alternate-bg;
}
// Fix sticky footer clipping over item contents
.item:nth-last-child(2) {
  margin-bottom: $footer-height + 2rem;
}
</style>