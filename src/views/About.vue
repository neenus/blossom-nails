<template>
  <div class="about">
    <Navbar />
    <h1>This is an about page</h1>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@components/_navbar.vue";
import Footer from "@components/_footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
