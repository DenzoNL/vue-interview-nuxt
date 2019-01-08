<template>
  <b-row>
    <b-col sm="12" md="8" offset-md="2" lg="6" offset-lg="3">
      <!-- When the Add button is clicked, add its contents to the items list. -->
      <!-- If you press Enter while the input is focussed, the same behaviour will be executed as the Add button. -->
      <b-form @submit.prevent="addItem">
        <div class="item-creator">
          <b-input-group class="mb-3">
            <b-input v-model="newItem" type="text" :placeholder="newItemPlaceholder"></b-input>
            <b-input-group-append>
              <!-- The Add button should be green -->
              <!-- Disable the Add button if the input is empty. -->
              <b-button variant="success" type="submit" :disabled="newItem.length == 0">Add</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </b-form>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      // Add a data string that models the input for a new item.
      newItem: "",
      inspiringPlaceholders: [
        "Sleep",
        "Move stuff to new apartement",
        "Learn Rust",
        "Play Red Dead Redemption 2",
        "Submit Korsit Interview Assignment",
        "Conquer the World",
        "Fix global warming",
        "Drink beer",
        "Compete in game jam"
      ]
    };
  },

  // Generate a fancy new placeholder text on each refresh
  computed: {
    newItemPlaceholder: function() {
      return this.inspiringPlaceholders[
        Math.floor(Math.random() * this.inspiringPlaceholders.length)
      ];
    }
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