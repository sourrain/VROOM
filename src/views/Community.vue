<template>
  <div>
    <BlogPost />
    <BlogPost />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  components: { BlogPost },
  data() {
    return {
      welcome: {
        title: "Welcome!",
        blogPost: "Welcome to VROOM notebook gallery.",
        welcome: true,
        photo: "sky",
      },
      sampleBlogPost: [
        {
          title: "This is sample notebook",
          blogHTML: "This is notebook",
          blogCoverPhoto: "designed-for-everyone",
        },
        {
          title: "This is sample notebook",
          blogHTML: "This is notebook",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>

<style>
</style>