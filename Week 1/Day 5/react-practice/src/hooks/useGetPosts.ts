import axios from "axios";

const useGetPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export default useGetPosts;
