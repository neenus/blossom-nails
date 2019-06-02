<template>
  <v-footer dark height="auto">
    <v-container row fluid class="pa-0" text-xs-center>
      <v-layout
        wrap
        justify-space-between
        row
        fill-height
        class="custom-footer pt-0"
      >
        <v-spacer></v-spacer>
        <v-flex xs12 md4 offset-md-1 class="container ma-0">
          <v-card flat color="transparent" class="container py-0 my-0">
            <v-card-title class="py-0 mb-2 headline justify-center"
              >Contact Us</v-card-title
            >
            <v-card-text class="pa-0">
              <span>
                <v-icon left>place</v-icon>
              </span>
              <span>3500 Fallowfield Road, Suite #12</span>
            </v-card-text>
            <v-card-text class="pa-0">
              <span>
                <v-icon left>local_phone</v-icon>
              </span>
              <span>(613) 825-1245</span>
            </v-card-text>
            <v-card-text class="pa-0">
              <span>
                <v-icon left>email</v-icon>
              </span>
              <span>info@blossomnails.ca</span>
            </v-card-text>
            <!-- <v-card-text class="pa-0">
              <span>
                <v-icon left>public</v-icon>
              </span>
              <span>www.blossomnails.ca</span>
            </v-card-text>-->
          </v-card>
          <v-divider class="hidden-sm-and-up mt-3" color="white"></v-divider>
        </v-flex>
        <v-flex xs12 md6 class="container ma-0">
          <v-card flat color="transparent pa-0">
            <v-card-title class="headline justify-center py-0 mb-2"
              >We Are Open</v-card-title
            >
            <v-card-text class="pa-1">
              <span>Monday-Friday: 10AM - 7PM</span>
            </v-card-text>
            <v-card-text class="pa-1">
              <span>Saturday: 10AM - 6PM</span>
            </v-card-text>
            <v-card-text class="pa-1">
              <span>Sunday: 10AM - 5PM</span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
      <v-divider></v-divider>
      <v-layout wrap align-center justify-space-around row fill-height black>
        <v-flex class="xs12 md6 text-xs-center my-2">
          &copy; {{ new Date().getFullYear() }} —
          <strong>Blossom Nails & Spa</strong>
        </v-flex>

        <v-spacer></v-spacer>
        <v-flex class="xs12 md6 text-xs-center">
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      // "fab fa-twitter",
      // "fab fa-google-plus",
      // "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style lang="scss">
.custom-footer {
  background: url("./../assets/images/footer_bg.jpg") no-repeat;
  background-size: cover;
}
</style>
