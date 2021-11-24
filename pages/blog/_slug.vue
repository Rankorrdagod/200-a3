<template>
  <v-main>
    <v-container>
      <h2>{{ post.title }}</h2>
       <nuxt-img :src="post.image" sizes="sm:100vw md:50vw lg:600px" />
      <nuxt-content :document="post" />
    </v-container>
  </v-main>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const post = await $content(`blog/${params.slug}`).fetch();
      return {
        post,
      };
    } catch (error) {
      error("No article found");
    }
  },
};
</script>