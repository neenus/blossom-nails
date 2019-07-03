<template>
  <div class="about">
    <Navbar />
    <Contact />
    <v-footer class="pa-3">
      <v-layout wrap align-center justify-space-around row>
        <v-flex class="xs12 md6 text-xs-center my-2">
          &copy; {{ new Date().getFullYear() }} —
          <strong>Blossom Nails & Spa</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
import Navbar from "@components/_navbar.vue";
import Footer from "@components/_footer.vue";
import Contact from "@components/_contact.vue";

export default {
  components: {
    Navbar,
    Contact,
    Footer
  }
};
</script>
