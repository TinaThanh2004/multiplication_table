<script setup>
const props = defineProps( {
  linkText: {
    type: String,
    required: false,
    default: 'My Button'
  },
  routeName: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: false,
    default: 'secondary'
  }
})
</script>

<template>
  <router-link
    :to="{ name: props.routeName}"
    :class="props.theme"
  >
    {{ props.linkText }}
  </router-link>
</template>

<style scoped>
a {
  border:1px solid black;
  padding:5px;
  background-color: lemonchiffon;
  color: rebeccapurple;
  border-radius: 5px;

  &:hover {
    background-color: rebeccapurple;
    color: lemonchiffon;
  }

  &.primary {
    font-size: 150%;
    padding: 10px;
  }

}
</style>
