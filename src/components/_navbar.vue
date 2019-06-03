<template>
  <div>
    <v-toolbar flat height="75">
      <v-toolbar-title class="headline">
        <router-link class="toolbar-title" to="/">
          <img class="text-black" :src="logoSrc" />
          <span :style="titleFontSize">Blossom&nbsp;</span>
          <span class="font-weight-light">nails</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="item in items.slice(0, 3)"
          :key="item.title"
          :to="item.link"
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
      <v-toolbar-side-icon
        large
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-btn
        dark
        color="indigo darken-4"
        class="hidden-sm-and-down"
        href="https://www.fresha.com/providers/blossom-nails-spa-bly123fr"
        target="_blank"
      >
        <v-icon left>calendar_today</v-icon>
        <span class="mr-2">Book Now</span>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pt-4" dense>
        <!-- <v-divider></v-divider> -->

        <div v-for="item in items" :key="item.title">
          <v-list-tile
            v-if="item.title === 'Book an Appointment'"
            :href="item.link"
            target="_blank"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-else :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  computed: {
    titleFontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { "font-size": "2.5rem !important" };
        default:
          return { "font-size": "3rem !important" };
      }
    }
  },
  data() {
    return {
      logoSrc: require("@assets/images/logo.png"),
      drawer: false,
      items: [
        { title: "Home", icon: "dashboard", link: "/" },
        { title: "Services", icon: "table_chart", link: "/services" },
        // { title: "Gallery", icon: "photo_library", link: "/gallery" },
        { title: "Contact", icon: "question_answer", link: "/contact" },
        {
          title: "Book an Appointment",
          icon: "access_time",
          link: "https://www.fresha.com/providers/blossom-nails-spa-bly123fr"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}

.v-toolbar__title.headline img {
  max-width: 80px;
  vertical-align: bottom;
}

.v-toolbar__title span {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 1.75rem;
  line-height: 25px;
}

.v-toolbar__title span:nth-child(2) {
  font-weight: bold;
  word-spacing: -5px;
  margin-left: 5px;
  // color: rgb(169, 37, 109);
  background: linear-gradient(45deg, rgb(169, 37, 109), rgb(221, 171, 105));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
