<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <NuxtLink v-bind:to="`blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();
    return {
      posts,
    };
  },
};
</script>