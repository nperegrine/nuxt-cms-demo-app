<script setup>
const { getItems } = useDirectusItems()
const slug = useRoute().params.slug
const filters = { slug }

const {
  data: article,
  pending,
  error,
  refresh
} = await useAsyncData('articles', () =>
  getItems({ collection: 'Articles', params: { filter: filters } })
)
</script>

<template>
  <div class="flex justify-center p-5">
    <ArticleLarge
      v-bind="{ article: article[0], cms: 'directus' }"
    ></ArticleLarge>
  </div>
</template>
