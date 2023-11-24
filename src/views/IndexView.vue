<script setup>
import Navbar from '../components/Navbar.vue'
import Intro from '../components/Intro.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
  <Navbar />
  <div class="container">
    <Intro />
    <Projects />
    <Experience />
    <Contact />
  </div>
</template>
