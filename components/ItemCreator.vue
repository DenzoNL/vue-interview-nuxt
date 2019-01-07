<template>
  <div class="row">
    <div class="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <!-- When the Add button is clicked, add its contents to the items list. -->
      <!-- If you press Enter while the input is focussed, the same behaviour will be executed as the Add button. -->
      <form @submit.prevent="addItem">
        <div class="item-creator">
          <div class="input-group mb-3">
            <input
              v-model="newItem"
              type="text"
              class="form-control"
              aria-describedby="basic-addon2"
            >
            <div class="input-group-append">
              <!-- The Add button should be green -->
              <!-- Disable the Add button if the input is empty. -->
              <button
                class="btn btn-success"
                type="submit"
                :disabled="newItem.length == 0"
              >Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Add a data string that models the input for a new item.
      newItem: ""
    };
  },
  methods: {
    addItem() {
      // Emit an addItem event with the new
      this.$emit("addItem", this.newItem);
      // Reset the input
      this.newItem = "";
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/scss/_variables.scss";
/* The input field should have a blue drop shadow if it's focussed. */

.item-creator input:focus {
  -webkit-box-shadow: 6px 13px 5px -7px $shadow-color;
  -moz-box-shadow: 6px 13px 5px -7px $shadow-color;
  box-shadow: 6px 13px 5px -7px $shadow-color;
}
</style>