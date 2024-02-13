<script setup>
const { getItems } = useDirectusItems()
const { getThumbnail: img } = useDirectusFiles()
const slug = useRoute().params.slug
const article = ref({})

const fetchArticles = async () => {
  try {
    const filters = { slug }
    const response = await getItems({
      collection: 'Articles',
      params: { filter: filters }
    })
    article.value = response[0]
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => fetchArticles())
</script>

<template>
  <img :src="img(article.featured_image, { width: 300 })" alt="vue-school" />
  <h1>{{ article.Title }}</h1>
  <p>{{ article.Body }}</p>
</template>
