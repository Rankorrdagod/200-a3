<template>
  <v-main>
    <article>
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <nuxt-img :src="post.image" sizes="sm:100vw md:50vw lg:600px" />
      <nuxt-content :document="post" />
    </article>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const post = await $content(`gallery/${params.slug}`).fetch();
      return {
       post,
      };
    } catch (error) {
      error("No article found");
    }
  },
};
</script>