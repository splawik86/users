<template>
  <div id="app">
      <header class="navbar">
          <section class="navbar-section">
              <a class="navbar-brand mr-2">Spectre.css</a>
              <a class="btn btn-link">Users</a>
          </section>
      </header>
      <div class="container grid-lg">
          <div class="columns">


              <router-view></router-view>


          </div>
      </div>
  </div>
</template>


<script>

    export default {
        name: 'App',
        data() {
            return {

            }
        }
    }

</script>

<style>

    @import "~spectre.css";
    /*@import "~spectre-icons.css";*/
</style>
