<template>
  <div>
    <Navbar />
    <Carousel />
    <About />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@components/_navbar.vue";
import Footer from "@components/_footer.vue";
import Carousel from "@components/_carousel.vue";
import About from "@components/_about.vue";

export default {
  components: {
    Navbar,
    Carousel,
    About,
    Footer
  }
};
</script>
