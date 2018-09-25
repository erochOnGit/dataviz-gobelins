<template>
  <div class="welcome">
    <TextWithTitle centered interligne="..." title="Bienvenu sur" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
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

<style lang="scss">
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 100vh;
  .text-with-title {
    width: 80vw;
  }
}
@media screen and (min-width: 860px) {
  .welcome {
    .text-with-title {
      width: 60vw;
    }
  }
}
@media screen and (min-width: 1200px) {
  .welcome {
    .text-with-title {
      width: 40vw;
    }
  }
}
</style>