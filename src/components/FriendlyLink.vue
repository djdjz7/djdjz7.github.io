<script setup lang="ts">
defineProps({
    name: String,
    href: String,
    imgSrc: String,
    description: {
        type: String,
        required: false,
    },
})
</script>

<template>
    <a p-4 className="hover:bg-white/30 hover:shadow-lg" block rounded-4 :href="href" text-white no-underline
        flex gap-2 items-center transition-all duration-150>
        <div h-12 w-12 overflow-clip rounded-full shadow-md>
          <img h-12 w-12 :src="imgSrc"/>
        </div>
        <div flex='~ col'>
          <span text-xl font-bold>{{name}}</span>
          <span v-if="description!=null" className="text-white/70">{{description}}</span>
        </div>
      </a>
</template>