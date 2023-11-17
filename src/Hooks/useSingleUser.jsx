import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { AuthContext } from "../AuthProvider/Context";
const useSingleUser = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const { data: singleUser = [], refetch } = useQuery(['singleUser',user?.email], async () => {
        const res = await axiosSecure.get(`/users/${user?.email}`)
        return res.data;
    })
    return [singleUser, refetch];
};
export default useSingleUser;