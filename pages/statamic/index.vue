<script setup>
const { find } = useStatamic()
const articles = ref([])

try {
  // Get all articles
  const { data } = await find('blog')
  articles.value = data
} catch (e) {
  console.log(e)
}
</script>

<template>
  <div class="p-5">
    <h4 v-for="article in articles" :key="article.id">
      <Article v-bind="{ article, cms: 'statamic' }"></Article>
    </h4>
  </div>
</template>
