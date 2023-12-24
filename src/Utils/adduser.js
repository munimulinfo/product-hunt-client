import useAxios from "../Hooks/useAxios";
export const addUser = (user) => {
  const [axiosSecure] = useAxios();
  const userData = {
    name: user?.displayName,
    email: user?.email,
    role: "user",
  };
  axiosSecure.post("/users", userData);
};
