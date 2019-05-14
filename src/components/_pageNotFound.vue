<template>
  <div>
    <Navbar />
    <h1 class="mt-5 text-xs-center">404 page does not exist</h1>
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
