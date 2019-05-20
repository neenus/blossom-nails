<template>
  <v-carousel dark hide-delimiters height="780">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)"
    >
      <v-layout
        class="white--text"
        fill-height
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">{{ item.msgHeader }}</h1>
        <h4 class="subheading">{{ item.msgBody }}</h4>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@assets/images/slider_1.jpg"),
          msgHeader: "True Beauty",
          msgBody: "comes from within"
        },
        {
          src: require("@assets/images/slider_2.jpg"),
          msgHeader: "Vuetify.js",
          msgBody: "Build your application today"
        },
        {
          src: require("@assets/images/slider_3.jpg"),
          msgHeader: "Vuetify.js",
          msgBody: "Build your application today"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-carousel {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
