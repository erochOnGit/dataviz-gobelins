<template>
  <div class="text-with-title">
    <h1 class="text-with-title__title">{{ title }}</h1>
    <div class="text-with-title__content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
    content: String
  }
};
</script>

<style scoped lang="scss">
.text-with-title {
  &__title {
    font-size: 16em;
  }
  &__content {
    font-size: 4em;
  }
}
</style>
