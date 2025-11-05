<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <section class="web-app-container">
    <header>
      <h1>Multiplication Table Project</h1>
      <navbar/>
    </header>

    <section class="page-content">
      <router-view/>
    </section>

    <footer>
      <navbar/>
      <p>&copy; Tina 2025</p>
    </footer>
  </section>
</template>

<style scoped>
h1 {
  text-align: center;
}
section.web-app-container {
  max-width: 80%;
  border: 1px solid black;
  margin: 0 auto;

  section.page-content {
    margin: 10px 0;
    background-color: lightgray;
    padding: 20px;
    }

  footer {
    p {
      text-align: center;
      }
    }
}
</style>


