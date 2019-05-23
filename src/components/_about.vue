<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex class="custom" xs10 offset-xs1>
        <v-card flat>
          <v-card-title primary-title>
            <h3 class="text-xs-center" :style="fontSize">
              Blossom Nails and Spa
            </h3>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md5 mb-3>
        <v-img
          contain
          height="45vh"
          class="white--text mx-3"
          :src="aboutSrc"
        ></v-img>
      </v-flex>
      <v-flex xs10 md5>
        <div v-html="card_text" class="text-xs-center"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { "font-size": "1.5rem !important" };
        default:
          return { "font-size": "2.5rem !important" };
      }
    }
  },
  data() {
    return {
      aboutSrc: require("@assets/images/about.jpg"),
      card_text: `<p class="grey--text text-xs-left">
          Welcome to <span class="indigo--text text--darken-4 title font-italic" style="font-family:'Playfair Display', serif !important">Blossom Nails & Spa</span>, Ottawa’s brand new addition to the ultimate salon and spa experience.
        </p>
        <p class='mt-4 grey--text text-xs-left'>
          We Offer a large variety of services including nail enhancements, waxing services, microblading, eyelash extensions and more, our team of highly trained technicians promise exceptional customer service, high quality products and a memorable experience.
        </p>
        <p class="mt-4 grey--text text-xs-left">
          At Blossom, our mission is to become Ottawa’s valuable destination for the ultimate beauty experience with an approach to offer eco-friendly products and services. Our team of beauty professionals awaits you and are more than happy to answer any questions and inquiries. Please call or email us to schedule your next appointment today.
        </p>
        <p class="mt-4 grey--text text-xs-left">
          Our team of beauty professionals awaits you and are more than happy to answer any questions and inquiries.
        </p>
        
        <p class="mt-4 grey--text text-xs-left">
          Call us at (613) 825-1245 to schedule an appointment today alternitavely you can conveniently schedule your appointment online.
        </p>
        <a href="/booking" class="left v-btn v-btn--router theme--dark indigo darken-4 ma-0">
          <div class="v-btn__content">
            <i aria-hidden="true" class="v-icon v-icon--left material-icons theme--dark">calendar_today</i>
            <span class="mr-2">Book Now</span>
          </div>
        </a>`
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,400i&display=swap");
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

body {
  font-family: "Open Sans", sans-serif !important;
  color: #333 !important;
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: 1px;
}
.custom {
  margin-top: -75px;
}

h3 {
  font-family: "Playfair Display", serif !important;
  font-style: italic;
  font-weight: 400;
  margin: 0 auto;
}

h3::after {
  display: block;
  height: 3px;
  background-color: black;
  content: "";
  width: 50%;
  margin: 20px auto;
}
</style>
