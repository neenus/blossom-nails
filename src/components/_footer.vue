<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="indigo darken-4">
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >
      </v-card-title>

      <v-card-actions class="black">
        <v-layout wrap align-center justify-space-around row fill-height>
          <v-flex class="xs12 md6 text-xs-center mb-2">
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
      </v-card-actions>
    </v-card>
  </v-footer>
  <!-- <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
  </div>-->
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style lang="scss"></style>
