<script setup>
  import MyButton from "@/components/MyButton.vue";
</script>

<template>
  <nav>
    <my-button link-text="Home" route-name="Home" theme="primary"/>
    <my-button link-text="About Me" route-name="AboutMe"/>
    <my-button link-text="Multiplication Table" route-name="MultiplicationTable"/>
    <my-button link-text="Portfolio" route-name="Portfolio"/>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  /* code here would apply to the contents of nav (like the links) */

  a {
    text-decoration: none;

    &.router-link-active {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
