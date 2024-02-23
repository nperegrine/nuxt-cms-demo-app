<script setup>
const { findOne } = useStatamic()
const article = ref([])
const slug = useRoute().params.slug

try {
  // Get one article by id (slug)
  const { data } = await findOne('blog', slug)
  article.value = data
} catch (e) {
  console.log(e)
}
</script>

<template>
  <div class="flex justify-center p-5">
    <ArticleLarge v-bind="{ article, cms: 'statamic' }"></ArticleLarge>
  </div>
</template>
