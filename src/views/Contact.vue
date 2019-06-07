<template>
  <div class="about">
    <Navbar />
    <Contact />
    <!-- <Footer /> -->
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
