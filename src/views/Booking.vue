<template>
  <div>
    <Navbar/>
    <v-layout>
      <v-flex class="mt-3" xs8 offset-xs2>
        <!-- <h1 class="mt-5 text-xs-center">This is booking page</h1> -->
        <iframe
          class="mt-1 text-xs-center"
          id="shedulWidget"
          src="https://app.shedul.com/online_bookings/test-salon-qdj1hmxj"
        ></iframe>
      </v-flex>
    </v-layout>
    <Footer/>
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

<style scoped lang="scss">
#shedulWidget {
  width: 100%;
  height: 80vh;
  border: 1px solid rgb(128, 128, 128);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
