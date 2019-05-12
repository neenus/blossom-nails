<template>
  <div>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Blossom&nbsp;</span>
        <span class="font-weight-light">Nails Salon and Spa</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat>Services</v-btn>
        <v-btn flat>Gallery</v-btn>
        <v-btn flat>Contact</v-btn>
      </v-toolbar-items>
      <v-btn dark color="indigo darken-4">
        <v-icon left>calendar_today</v-icon>
        <span class="mr-2">Book Now</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>
