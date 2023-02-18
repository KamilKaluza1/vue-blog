<template>
  <div class="tags">
    <h1>Tag Posts</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="postWithTag.length" class="layout">
      <PostList  :posts="postWithTag"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else><Spinner/></div>
  </div>

</template>

<script>
import getPosts from "@/composables/getPosts";
import { useRoute } from "vue-router";

import { computed } from "vue";
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'


export default {
    components: {PostList , Spinner, TagCloud},
  setup() {
    const router = useRoute()
    const { posts, error, load } = getPosts();
    load();

    const postWithTag = computed(() => {
        return posts.value.filter((post)=> post.tags.includes(router.params.tag))
    })
    return { posts, error,  postWithTag };
  },

//   computed: {
//     posts(){
//         return this.posts.filter((post) => post.tags.includes(this.search))
//     }
//   }
};
</script>

<style>
.tags{
  max-width: 1000px;
  margin: 0px auto;
  padding: 10px;
}
</style>