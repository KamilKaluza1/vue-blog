<template>
  
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost.js";
import Spinner from "../components/Spinner";

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1000px;
  margin: 0px auto;
}

.post p {
  color: gray;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
