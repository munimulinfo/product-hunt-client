import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://product-hunt-two-flax.vercel.app",
});
const useAxios = () => {
  return [axiosSecure];
};
export default useAxios;
