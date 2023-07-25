<script setup lang="ts">
</script>

<template>
  <RouterView />
</template>

<style>
a:hover {
  color: white;
}

::-webkit-scrollbar {
  display: none;
}

.fade-in{
  animation: fade-in 0.8s;
}

@keyframes fade-in {
  0% {
    translate: 0px 12px;
    opacity: 0;
  }
}

h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
</style>
