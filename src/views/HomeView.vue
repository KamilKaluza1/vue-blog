<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList  :posts="posts"/>
    </div>
    <div v-else><Spinner/></div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from '../composables/getPosts.js'
import Spinner from '../components/Spinner.vue'

export default {
  components: { PostList, Spinner },
  name: "HomeView",
  setup() {
    const {posts, error, load} = getPosts()
    load()
    return { posts, error };
  },
};
</script>

<style>
.home{
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}
</style>