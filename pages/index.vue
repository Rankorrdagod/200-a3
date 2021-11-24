<template>
  <section>
    <nav>
      <h2>Articles</h2>
      <ul>
        <li v-for="post in posts" :key="post.slug">
          <NuxtLink :to="`blog/${post.slug}`">{{ post.title }}</NuxtLink>
            
        </li>
      </ul>
         </nav>
  </section>
</template>
<script>
export default {
  // fetch the data from the blog in the content folder
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();
  
    return {
      posts,
     
    };
  },
};
</script>