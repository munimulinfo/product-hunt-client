import axios from "axios";

 export const addUser = (user) => {
  const userData = {
    name: user?.displayName,
    email: user?.email,
    role: "user",
  };
  axios.post("http://localhost:5100/users", userData);
};