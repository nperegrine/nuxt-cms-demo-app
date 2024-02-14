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
  <div class="flex justify-center p-5">
    <ArticleLarge v-bind="{ article, cms: 'strapi' }"></ArticleLarge>
  </div>
</template>
