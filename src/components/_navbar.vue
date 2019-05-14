<template>
  <div>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Blossom&nbsp;</span>
        <span class="font-weight-light">Nails Salon and Spa</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat>Services</v-btn>
        <v-btn flat>Gallery</v-btn>
        <v-btn flat>Contact</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon large class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn dark color="indigo darken-4" class="hidden-xs-only" to="/booking">
        <v-icon left>calendar_today</v-icon>
        <span class="mr-2">Book Now</span>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pt-4" dense>
        <!-- <v-divider></v-divider> -->

        <v-list-tile v-for="item in items" :key="item.title" @click :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title :to="item.link">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "dashboard", link: "/" },
        { title: "Services", icon: "table_chart", link: "/services" },
        { title: "Gallery", icon: "photo_library", link: "/gallery" },
        { title: "Contact", icon: "question_answer", link: "/contact" },
        { title: "Book an Appointment", icon: "access_time", link: "/booking" }
      ]
    };
  }
};
</script>
