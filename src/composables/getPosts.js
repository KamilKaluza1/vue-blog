import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      //delay to show spinner
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 700);
      // });
      const res = await projectFirestore.collection('posts').get()
      posts.value = res.docs.map(doc =>{
        return {...doc.data(), id: doc.id}
      })
      
    } catch (error) {
      error.value = error.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
