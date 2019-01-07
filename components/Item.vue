<template>
  <div class="item">
    <!-- Convert item to a bootstrap row for proper alignment -->
    <div class="row">
      <span
        class="col d-inline-block text-truncate"
        @click="showDecryptedItem"
      >
        <!-- Only display encrypted data. -->
        {{ item[1] }}
      </span>
      <div class="col">
        <!-- There should be a Remove button in every Item (on the right). -->
        <!-- The Remove button should be red. -->
        <div class="float-right">
          <button
            class="btn btn-sm btn-danger"
            @click="removeItem"
          >Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // Add the item name as a prop.
  props: {
    item: Array
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

.item:nth-child(even) {
  background-color: $item-alternate-bg;
}
</style>