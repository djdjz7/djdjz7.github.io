<script setup lang="ts">
import GithubCorner from "../components/GithubCorner.vue";
import NavLink from "../components/NavLink.vue";
</script>

<template>
  <div
    bg="[url(/bg.webp)] cover center"
    flex
    flex-col
    items-center
    justify-center
    h-screen
    w-screen
    select-none
    top-0
    left-0
    fixed
  >
    <GithubCorner />
    <div
      border="t-2 l-2 b-0 r-0 white/30 solid"
      shadow="xl hover:2xl"
      transition-all
      duration-300
      rounded-6
      backdrop-blur-xl
      p-12
      flex="~ col"
      items-center
      text-white
      className="hover:-translate-y-2 fade-in"
    >
      <div
        w-24
        h-24
        className="-m-t-24"
        rounded-full
        overflow-clip
        border="t-2 l-2 b-0 r-0 white/30 solid"
        shadow-xl
      >
        <img w-24 h-24 src="/avatars/avatar.jpg" title="avatar" />
      </div>
      <span text-3xl m-t-4 font-bold> Jason Dai </span>
      <span m-t-4>Hey there!</span>
      <span>Here's my new homepage!</span>
      <span>Nothing new here, actually :P</span>
    </div>
    <div
      border="t-2 l-2 b-0 r-0 white/30 solid"
      backdrop-blur-2xl
      p-1
      rounded-7
      className="-m-t-6 hover:-translate-y-2 fade-in"
      z-1
      text-white
      transition-all
      duration-300
      shadow-2xl
      flex
      gap-1
    >
      <NavLink
        href="https://legacy.openflier.top"
        text="中育飞车助手"
        symbol="wifi"
      />
      <NavLink
        href="https://openflier.top"
        text="OpenFlier"
        symbol="screenshot_monitor"
      />
      <NavLink href="https://blog.djdjz7.top" text="博客" symbol="article" />
      <NavLink
        href="https://quote.djdjz7.top"
        text="And I Quote"
        symbol="chat"
      />
      <NavLink href="/links" text="Links" symbol="link" />
    </div>
  </div>
</template>
