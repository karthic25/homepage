<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top justify-content-between">
    <a class="navbar-brand" href="#">{{ navLogo }}<i class="fa fa-home hvr-bounce-in" aria-hidden="true"></i></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse-identifier"
      aria-controls="collapse-identifier" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navigation links -->
    <div class="collapse navbar-collapse" id="collapse-identifier">
      <div class="navbar-nav ml-auto">
        <a class="nav-item nav-link" v-for="item in navItems" :href="item.href" :id="item.id"
          :target="item.target" :class="{ active: item.active }">{{ item.text }}</a>
      </div>
    </div>
  </nav>
  <div class="nav-padding"></div>
</template>

<style scoped>
  .nav-padding {
    padding-top: 56px; /* matches height of navbar */
  }
</style>

<script>
  $(document).ready(function () {
    // Update navbar status while scrolling
    $('body').scrollspy({ target: ".navbar", offset: 50 });
  });

  export default {
    data() {
      return {
        navLogo: 'Karthic Palaniappan',
        navItems: [
            { id: 'n1', href: '#intro', text: 'Intro', active: true },
            { id: 'n2', href: '#projects', text: 'Projects', active: false },
            { id: 'n3', href: '#experience', text: 'Experience', active: false },
            { id: 'n4', href: '#contact', text: 'Contact', active: false },
            { id: 'n5', href: '/src/assets/resume.pdf', text: 'Resume', target: '_blank', active: false },
        ]
      }
    }
  }
</script>
