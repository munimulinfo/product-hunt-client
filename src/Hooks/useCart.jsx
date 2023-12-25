import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Context";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  const {
    refetch,
    data: cart = [],
    error,
  } = useQuery({
    queryKey: ["singlecart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/singlecart/${user?.email}`);
        return res.data;
      } catch (error) {
        console.error("Error fetching cart data:", error);
        throw error;
      }
    },
    onError: (error) => {
      console.error("Query error:", error);
    },
  });
  return [cart, refetch, error];
};

export default useCart;
