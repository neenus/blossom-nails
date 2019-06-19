<template>
  <div class="contact">
    <v-layout row>
      <v-flex class="mx-5" container xs12>
        <v-img :src="imgSrc" height="300"></v-img>
      </v-flex>
    </v-layout>

    <!-- Contact information seciton (address, telephone, email and social media) -->
    <v-layout row wrap justify-center>
      <v-flex
        xs10
        offset-xs1
        md3
        class="flex-card ma-3"
        v-for="item in info"
        :key="item.icon"
      >
        <v-card
          flat
          hover
          color="pink darken-1"
          dark
          class="contact-card container"
        >
          <v-card-title class="text-uppercase justify-center">
            <h2>Address</h2>
          </v-card-title>
          <v-card-text class="text-uppercase text-xs-center pb-0 px-0">
            <span>{{ item.street1 }}</span>
          </v-card-text>
          <v-card-text class="text-uppercase text-xs-center pa-0 px-0">
            <span>{{ item.street2 }}</span>
          </v-card-text>
          <v-card-text class="text-uppercase text-xs-center pa-0">
            <span
              >{{ item.city }}, {{ item.province }} {{ item.postalCode }}</span
            >
          </v-card-text>
          <v-card-text class="text-uppercase text-xs-center pt-0 px-0">
            <span></span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        xs10
        offset-xs1
        md3
        class="ma-3"
        v-for="item in info"
        :key="item.phone"
      >
        <v-card
          flat
          hover
          color="pink darken-1"
          dark
          class="contact-card container"
        >
          <v-card-title class="text-uppercase justify-center">
            <h2>Phone/Email</h2>
          </v-card-title>
          <v-card-text class="text-uppercase text-xs-center pa-0">
            <span>{{ item.phone }}</span>
          </v-card-text>
          <v-card-text class="text-uppercase text-xs-center pt-0 px-0 mb-3">
            <span>
              <v-btn round depressed flat href="mailto:info@blossomnails.ca">{{
                item.email
              }}</v-btn>
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs10 offset-xs1 md3 class="my-3 mx-1">
        <v-card
          flat
          hover
          color="pink darken-1"
          dark
          class="contact-card container"
        >
          <v-card-title class="text-uppercase justify-center">
            <h2>social media</h2>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn
              v-for="item in socialLinks"
              :key="item.icon"
              class="text-xs-center mx-3 mb-5"
              dark
              icon
              target="_blank"
              :href="item.link"
            >
              <v-icon large>{{ item.icon }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap id="layer" align-center justify-center fill-height>
      <v-flex container xs12 mx-5>
        <iframe
          id="layer"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.762134121127!2d-75.74454298437337!3d45.29302817909939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfd14a5f589ef%3A0xb099d7918d96c87c!2s3500+Fallowfield+Rd%2C+Nepean%2C+ON+K2J+4B3!5e0!3m2!1sen!2sca!4v1559882506263!5m2!1sen!2sca"
          allowfullscreen
        ></iframe>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require("@assets/images/contact-bg.jpg"),
      // name: "",
      // email: "",
      // subject: "",
      // message: "",
      // valid: true,
      // nameRules: [v => !!v || "Name is required"],
      // emailRules: [
      //   v => !!v || "E-mail is required",
      //   v => /.+@.+/.test(v) || "E-mail must be valid"
      // ],
      // subjectRules: [
      //   v => !!v || "Subject cannot be empty",
      //   v => (v && v.length <= 35) || "Subject is too long"
      // ],
      // msgRules: [v => !!v || "Please enter a message"],
      info: [
        {
          street1: "3500 Fallowfield Road",
          street2: "Suite #12",
          city: "Ottawa",
          province: "Ontario",
          postalCode: "K2J 4A7",
          phone: "(613) 825-1245",
          email: "info@blossomnails.ca"
        }
      ],
      socialLinks: [
        {
          icon: "fab fa-facebook",
          link: "https://www.facebook.com/Blossom-Nails-Spa-1994521754186809"
        },
        {
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/blossomnailsandspa_/"
        }
      ]
    };
  }
  // methods: {
  //   submit() {
  //     if (this.$refs.form.validate()) {
  //       console.log(this.name, this.email, this.subject, this.message);
  //       this.$refs.form.reset();
  //     }
  //   }
  // }
};
</script>

<style lang="scss">
#layer {
  // position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  border: none;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  // height: 100%;
  min-height: 350px;
}

.contact-card:hover {
  cursor: default;
}

.contact-card {
  min-height: 250px;
}

.contact-card::before {
  content: "";
  display: block;
  width: 90%;
  height: 3px;
  margin: 0 auto;
  background-color: white;
}

.contact-card::after {
  content: "";
  display: block;
  width: 90%;
  height: 3px;
  margin: 0 auto;
  background-color: white;
}
</style>
