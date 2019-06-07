<template>
  <div class="contact">
    <v-layout row wrap id="layer" align-center justify-center fill-height>
      <v-flex xs12 mt-1>
        <iframe
          id="layer"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.762134121127!2d-75.74454298437337!3d45.29302817909939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfd14a5f589ef%3A0xb099d7918d96c87c!2s3500+Fallowfield+Rd%2C+Nepean%2C+ON+K2J+4B3!5e0!3m2!1sen!2sca!4v1559882506263!5m2!1sen!2sca"
          allowfullscreen
        ></iframe>
      </v-flex>

      <v-flex xs12 md5 class="my-3 mx-1">
        <v-card class="container justify-center">
          <v-card-title>
            <h2>We'd love to hear from you:</h2>
          </v-card-title>
          <v-card-text>
            <v-form class="px-3" ref="form">
              <v-text-field
                label="Name"
                v-model="name"
                prepend-icon="person"
                :rules="nameRules"
              ></v-text-field>
              <v-text-field
                label="email"
                v-model="email"
                prepend-icon="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                label="Subject"
                v-model="subject"
                prepend-icon="subject"
                :rules="subjectRules"
                :counter="35"
              ></v-text-field>
              <v-textarea
                label="Enter your message"
                v-model="message"
                :rules="msgRules"
              ></v-textarea>
              <v-btn
                flat
                round
                class="mx-0 mt-3 indigo darken-4 white--text"
                @click="submit"
                >Send a message</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md5 class="my-3 mx-1">
        <v-card class="container justify-center">
          <v-card-title>
            <h2>Connect with us on social media:</h2>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      valid: true,
      nameRules: [v => !!v || "Name is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      subjectRules: [
        v => !!v || "Subject cannot be empty",
        v => (v && v.length <= 35) || "Subject is too long"
      ],
      msgRules: [v => !!v || "Please enter a message"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.name, this.email, this.subject, this.message);
        this.$refs.form.reset();
      }
    }
  }
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
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  min-height: 350px;
}
</style>
