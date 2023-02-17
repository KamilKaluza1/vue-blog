import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      //delay to show spinner
      await new Promise((resolve) => {
        setTimeout(resolve, 700);
      });
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("no post");
      }
      post.value = await data.json();
    } catch (error) {
      error.value = error.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;
