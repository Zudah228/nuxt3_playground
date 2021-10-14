<template>
  <div>
    <Tutorial/>
    <p>{{ a }}</p>
    <input v-model="a" type="text">
  </div>
</template>

<script lang="ts">
export default defineComponent ({
  setup() {
    const a = ref('a')
    return {
      a
    }
  }
})
</script>
