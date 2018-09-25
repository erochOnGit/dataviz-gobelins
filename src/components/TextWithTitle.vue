<template>
  <div class="text-with-title" :class="{ centered: centered}">
    <h1 class="text-with-title__title">
        <div>{{ title }}</div>
        <div>{{ interligne }}</div>
    </h1>
    <div class="text-with-title__content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
    content: String,
    interligne: String,
    centered: Boolean
  }
};
</script>

<style scoped lang="scss">
.text-with-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: calc(3em + 1vw);
  }
  &__content {
    font-size: calc(1em + 1vw);
  }
}
.centered {
  text-align: center;
}
</style>
