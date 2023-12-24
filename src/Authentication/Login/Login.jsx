import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaSkating } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/Context";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { addUser } from "../../Utils/adduser";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, loading, setLoading, resetPassword, logOut } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [shows, setShows] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //password input toogle type text or pasword
  const handleVisiblePasswordFirst = () => {
    setShows(!shows);
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    signIn(data.email, data.password)
      .then((result) => {
        if (!result.user.emailVerified) {
          Swal.fire({
            icon: "error",
            title: "Not Verify email",
            showConfirmButton: false,
            timer: 2500,
          });
          logOut();
          return;
        }

        if (result.user) {
          toast.success("Sign In Successful", {
            autoClose: 1000,
            hideProgressBar: true,
            theme: "colored",
            pauseOnHover: false,
          });
          addUser(result.user);
          reset();
        }
        setError("");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message, {
          autoClose: 3000,
          theme: "colored",
          pauseOnHover: false,
        });
        setError(err?.message);
        setLoading(false);
      });
  };

  const handelReset = () => {
    const email = watch("email");
    if (email) {
      setLoading(true);
      resetPassword(email)
        .then(() => {
          toast.success("Please Check Your Email", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        });
    } else {
      toast.error("Please Provide A Valid Email", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <div className="w-full h-full md:px-20 px-5 flex justify-center items-center ">
        <form
          className="border border-[#F7A582] rounded-lg p-6 login-shadow"
          onSubmit={handleSubmit(onSubmit)}
          action=""
        >
          <h1 className="text-2xl text-center mb-2 font-serif text-green-900 uppercase font-bold ">
            Sign in to Product Hunt
          </h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-serif text-green-900">
                User Email
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your Email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-rose-500 animate-pulse">
                please provide your Email
              </span>
            )}
          </div>

          <div className="form-control relative w-full">
            <label className="label flex justify-between">
              <span className="label-text font-bold font-serif text-green-900">
                Password
              </span>
              <button
                onClick={() => handelReset()}
                className="label-text font-bold font-serif text-[#F7A582]"
              >
                Forgot password?
              </button>
            </label>

            <input
              type={shows ? "text" : "password"}
              {...register("password", {
                required: true,
                pattern: /(?=.*[A-Z])/,
                minLength: 6,
              })}
              placeholder="password"
              className="input input-bordered"
            />
            <span
              onClick={handleVisiblePasswordFirst}
              className="absolute  top-[50px] right-4 text-[18px]"
            >
              {shows ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
            <label className="label">
              {error && <p className="text-red-500 inline-block">{error}</p>}
            </label>
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">Password must have one Uppercase.</p>
            )}
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-[#F7A582] text-white  font-serif hover:bg-[#F7A582] text-[14px] border-0"
            >
              {loading ? <FaSkating className="animate-bounce" /> : "Sign in"}
            </button>
          </div>
          <h1 className="text-center mt-3">
            Please register at first. Go to{" "}
            <span className="text-green-800 font-semibold underline">
              <Link to={"/register"}>SIGN UP</Link>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
