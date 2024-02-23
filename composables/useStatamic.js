export default function () {
  const { $api } = useNuxtApp()

  async function find(collection, params) {
    return await $api.get(
      `/api/collections/${collection}/entries`,
      params ?? {}
    )
  }

  async function findOne(collection, id, params) {
    return await $api.get(
      `/api/collections/${collection}/entries/${id}`,
      params ?? {}
    )
  }

  return {
    find,
    findOne
  }
}
