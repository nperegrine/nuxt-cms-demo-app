<script setup>
const { getItems } = useDirectusItems()

const {
  data: articles,
  pending,
  error,
  refresh
} = await useAsyncData('articles', () => getItems({ collection: 'Articles' }))
</script>

<template>
  <div class="p-5">
    <h4 v-for="article in articles" :key="article.id">
      <Article v-bind="{ article, cms: 'directus' }"></Article>
    </h4>
  </div>
</template>
