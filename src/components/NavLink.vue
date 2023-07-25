<script setup lang="ts">
defineProps({
  href: String,
  symbol: String,
  text: String,
})
</script>
<template>
  <a
    text-white
    rounded-6
    bg-transparent
    className="hover:bg-white/30 main-page-links"
    hover:shadow-lg
    :href="href"
  >
    <div flex items-center>
      <span className="material-symbols-rounded" text-base>{{ symbol }}</span>
      <span m-l-1 className="hidden md:block">{{ text }}</span>
    </div>
  </a>
</template>

<style scoped>
a {
  padding: 0.6em 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 150ms;
}
</style>