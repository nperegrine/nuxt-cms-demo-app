<script setup>
const { getThumbnail: img } = useDirectusFiles()

const props = defineProps({
  cms: {
    type: String,
    default: null
  },
  article: {
    type: Object,
    default: () => {}
  }
})

const link = computed(() =>
  props.cms === 'directus'
    ? '/directus/' + props.article.slug
    : '/strapi/' + props.article.id
)
</script>

<template>
  <div
    class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <NuxtLink :to="link">
      <img
        class="rounded-t-lg"
        :src="
          cms === 'directus'
            ? img(article.featured_image)
            : article?.attributes?.featured_image?.data?.attributes?.url
        "
        alt="nuxt-cms-demo"
      />
    </NuxtLink>
    <div class="p-5">
      <NuxtLink :to="link">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ article.Title || article?.attributes?.title }}
        </h5>
      </NuxtLink>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ article.Body || article?.attributes?.body }}
      </p>
    </div>
  </div>
</template>
