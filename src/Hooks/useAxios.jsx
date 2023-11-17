import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://jobstack-backend.vercel.app",
});
const useAxios = () => {
    return [axiosSecure];
};
export default useAxios;