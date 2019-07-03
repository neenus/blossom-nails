<template>
  <div class="services">
    <Navbar />
    <v-layout>
      <v-flex xs12>
        <v-img
          height="350px"
          :src="servicesImg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex class="custom" xs10 offset-xs1 mb-4>
        <v-card flat>
          <v-card-title primary-title>
            <h3 class="text-xs-center" :style="fontSize">Our Services</h3>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="container justify-center">
      <v-flex
        xs12
        md3
        class="ma-2 justify-center"
        v-for="service in services"
        :key="service"
      >
        <v-card flat hover>
          <v-card-title class="justify-center subheading">{{
            service
          }}</v-card-title>
          <v-divider></v-divider>
        </v-card>
      </v-flex>
      <v-flex center>
        <div class="text-xs-center mt-3">
          <Popup />
          <v-btn
            round
            outline
            large
            class="indigo"
            href="https://www.fresha.com/providers/blossom-nails-spa-bly123fr"
            target="_blank"
            pulse
            >Book with us today</v-btn
          >
        </div>
      </v-flex>
    </v-layout>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@components/_navbar.vue";
import Footer from "@components/_footer.vue";
import Popup from "@components/_popup.vue";
export default {
  data() {
    return {
      services: [
        "Natural Nail Care",
        "Shellac Nail Care",
        "Artificial Nail Care",
        "Dipping Powder",
        "Waxing",
        "Tinting",
        "Eyelash Extension",
        "Facial Treatment",
        "Relaxation Massage"
      ],
      servicesImg: require("@assets/images/services-bg.jpg")
    };
  },
  components: {
    Navbar,
    Footer,
    Popup
  },
  computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { "font-size": "1.5rem !important" };
        default:
          return { "font-size": "2.5rem !important" };
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Open Sans", sans-serif !important;
  color: #333 !important;
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: 1px;
}
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
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
