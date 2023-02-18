import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // //delay to show spinner
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 700);
      // });
      let res = await  projectFirestore.collection('posts').doc(id).get()
      if (!res.exists){
        throw Error('That post does not exist...') 
      }
      post.value = { ...res.data(), id: id}
      console.log(post.value)
      }
      
     
    catch (error) {
      error.value = error.message;
      console.log(error.value)
    }
  };
  return { post, error, load };
};

export default getPost;
