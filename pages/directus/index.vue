<script setup>
const { getItems } = useDirectusItems()
const { getThumbnail: img } = useDirectusFiles()

const articles = ref([])

const fetchArticles = async () => {
  try {
    const response = await getItems({
      collection: 'Articles'
    })
    articles.value = response
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => fetchArticles())
</script>

<template>
  <h1>Vue School Blog</h1>
  <div>
    <h4 v-for="article in articles" :key="article.id">
      <img
        :src="img(article.featured_image, { width: 300 })"
        alt="vue-school"
      />
      <NuxtLink :href="`/directus/${article.slug}`">
        <h2>{{ article.Title }}</h2>
      </NuxtLink>
      <span>{{ article.publish_date }}</span>
    </h4>
  </div>
</template>
