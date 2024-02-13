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
  <h1>Vue School Blog</h1>
  <div>
    <h4 v-for="article in articles" :key="article.id">
      <img
        :src="article?.attributes?.featured_image?.data?.attributes?.url"
        width="300"
        alt="vue-school"
      />
      <NuxtLink :href="`/strapi/${article.id}`">
        <h2>{{ article.attributes.title }}</h2>
      </NuxtLink>
      <span>{{ article.attributes.createdAt }}</span>
    </h4>
  </div>
</template>
