<script setup lang="ts">
import FriendlyLink from "../components/FriendlyLink.vue";
</script>

<template>
  <div
    bg="[url(/bg.png)] cover center"
    md:flex
    md:flex-col
    md:items-center
    md:justify-center
    h-screen
    w-screen
    select-none
    top-0
    left-0
    fixed
  >
    <div
      border="md:t-2 md:l-2 md:b-0 md:r-0 md:white/30 solid transparent"
      shadow="xl hover:2xl"
      transition-all
      duration-300
      md:rounded-6
      backdrop-blur-xl
      text-left
      p-2
      z-1
      text-white
      className="md:hover:-translate-y-2 fade-in md:max-h-[calc(100vh-5rem)]"
      md:min-w-lg
      h-screen
      md:h-auto
      overflow-scroll
    >
      <main>
        <div flex items-center>
          <a class="material-symbols-rounded" hover:text-white text-white href="/" text-4xl>chevron_left</a>
          <h1 m-l-2 text-4xl>Friendly Links</h1>
        </div>
        <hr border-1 className="border-white/88" m-x-2 rounded-full />
        <FriendlyLink
          name="litluo"
          href="https://www.cnblogs.com/litluo"
          imgSrc="/avatars/litluo.png"
        />
        <FriendlyLink
          name="SXZ++"
          href="https://sxz-oi.github.io/"
          imgSrc="/avatars/sxz++.png"
          description="These guys are 巨, check it out."
        />
        <FriendlyLink
          name="KuzuSy"
          href="https://kuzusy.github.io"
          imgSrc="https://avatars.githubusercontent.com/u/72185113?s=96&v=4"
          description="可恶，人家都毕业了"
        />
        <FriendlyLink
          name="Cirno Baka"
          href="https://cirno-baka.github.io/"
          imgSrc="https://avatars.githubusercontent.com/u/53512550?s=96&v=4"
          description='"我最近没空弄"'
        />
      </main>
    </div>
  </div>
</template>
