<template>
  <div v-if="error">
    <h1>{{ error }}</h1>
  </div>

  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <p class="pre">{{ post.body }}</p>
    <button @click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost.js";
import Spinner from "../components/Spinner";
import { projectFirestore } from "@/firebase/config";
import { useRouter } from "vue-router";

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    const router = useRouter()
    load();
    const deletePost = async () => {
      await projectFirestore.collection('posts').doc(props.id).delete();
      router.push('/')
    };
    return { error, post, deletePost };
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
