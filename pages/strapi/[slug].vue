<script setup>
const { findOne } = useStrapi()
const article = ref([])
const slug = useRoute().params.slug

try {
  // Get one article by id (slug)
  const response = await findOne('articles', slug, {
    populate: 'featured_image'
  })
  article.value = response.data
} catch (e) {
  console.log(e)
}
</script>

<template>
  <img
    :src="article?.attributes?.featured_image?.data?.attributes?.url"
    width="300"
    alt="vue-school"
  />
  <h1>{{ article?.attributes?.title }}</h1>
  <p>{{ article?.attributes?.body }}</p>
</template>
