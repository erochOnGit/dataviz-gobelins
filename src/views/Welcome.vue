<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TextWithTitle centered interligne="..." title="Bienvenu sur" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TextWithTitle from "@/components/TextWithTitle.vue";

export default {
  name: "welcome",
  components: {
    TextWithTitle
  }
};
</script>
