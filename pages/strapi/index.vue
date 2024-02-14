<script setup>
const { find } = useStrapi()
const articles = ref([])

try {
  // Get all articles
  const response = await find('articles', { populate: 'featured_image' })
  articles.value = response.data
} catch (e) {
  console.log(e)
}
</script>

<template>
  <div class="p-5">
    <h4 v-for="article in articles" :key="article.id">
      <Article v-bind="{ article, cms: 'strapi' }"></Article>
    </h4>
  </div>
</template>
