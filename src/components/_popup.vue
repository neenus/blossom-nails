<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-btn round outline large slot="activator" class="indigo">Our Services Menu</v-btn>
    <v-card>
      <v-card-title>
        <v-btn
          color="indigo darken-4"
          class="close-btn"
          fixed
          icon
          top
          right
          outline
          @click="dialog = false"
        >
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn :href="priceListFileSrc" download flat round color="indigo darken-4">
          <v-icon left>cloud_download</v-icon>Download
        </v-btn>
      </v-card-title>
      <v-img width="100%" height="auto" :src="priceListImgSrc"></v-img>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      priceListImgSrc: require("@assets/images/price_list.png"),
      priceListFileSrc: require("@assets/price_list.pdf")
    };
  }
};
</script>

<style lang="scss">
.close-btn {
  z-index: 10;
}
</style>
