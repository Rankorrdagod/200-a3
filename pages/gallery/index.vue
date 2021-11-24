<template>
  <div>
    <ul>
      <li v-for="gallery in galleries" :key="gallery.slug">
         <NuxtLink v-bind:to="`gallery/${gallery.slug}`">{{ gallery.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const galleries = await $content("gallery").fetch();
    return {
      galleries,
    };
  },
};
</script>