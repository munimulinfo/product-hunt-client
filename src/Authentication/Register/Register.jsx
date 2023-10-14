import { useForm } from "react-hook-form";
import img1 from "../../assets/image/Frame (1).png";
import img2 from "../../assets/image/Frame.png"
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaSkating } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/Context";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser, updateUserProfile, loading, setLoading, emailVerification, logOut } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [shows, setShows] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    //password text toogle
    const handleVisiblePasswordFirst = () => {
        setShows(!shows);
    };
    //password text toogle
    const handleVisiblePassword = () => {
        setShow(!show);
    };

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
         setLoading(true);
         if (data.password == data.confirmPassword) {
            createUser(data?.email, data?.password)
                .then((result) => {
                    emailVerification(result?.user);
                    updateUserProfile(data?.name)
                        .then(() => {
                            setError("");
                            Swal.fire({
                                icon: "info",
                                title: "Email Verification",
                                text: "Check your email and verify your account",
                                showConfirmButton: true,
                            });
                            logOut();
                            reset();
                            navigate("/login");
                        })
                        .catch((err) => {
                            setError(err.message);
                        });
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        } else {
            setError('Password dose not match');
        }

    }


    return (
        <div className="flex flex-col lg:flex-row md:gap-0 gap-10 min-h-screen justify-center items-center">
            <div className="bg-[#07332F] px-4 lg:px-0  flex justify-center items-center min-h-screen w-full relative">
                <img src={img1} className="md:w-2/4 mt-20 w-full" alt="img" />
                <img src={img2} className="absolute top-0 right-0" alt="img" />
            </div>
            <div className="w-full h-full md:px-20 px-5 flex justify-center items-center ">

                <form className="border border-[#F7A582] rounded-lg p-6 login-shadow" onSubmit={handleSubmit(onSubmit)} action="">
                    <h1 className="text-2xl text-center mb-2 font-serif text-green-900 uppercase font-bold ">Sign up to DocHouse</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold font-serif text-green-900">User Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Enter your Name"
                            className="input input-bordered"
                        />
                        {errors.email && (
                            <span className="text-rose-500 animate-pulse">
                                please provide your User Name
                            </span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold font-serif text-green-900">User Email</span>
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
                        <label className="label">
                            <span className="label-text font-bold font-serif text-green-900">Password</span>
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
                        {errors.password?.type === "required" && (
                            <p className="text-red-600">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-600">Password must be 6 characters</p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600">
                                Password must have one Uppercase.
                            </p>
                        )}
                    </div>
                    <div className="form-control relative w-full">
                        <label className="label">
                            <span className="label-text font-bold font-serif text-green-900">Confirm Password</span>
                        </label>
                        <input
                            type={show ? "text" : "password"}
                            {...register("confirmPassword", { required: true })}
                            placeholder="Re type password"
                            className="input input-bordered"
                        ></input>
                        <span
                            onClick={handleVisiblePassword}
                            className="absolute top-[50px] right-4 text-[18px]"
                        >
                            {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                        </span>
                        {errors.confirmPassword?.type === "required" && (
                            <p className="text-red-600">Confirm Password is required</p>
                        )}
                        {error && <p className="text-error mb-2">{error}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-[#F7A582] text-white  font-serif hover:bg-[#F7A582] text-[14px] border-0">
                            {loading ? <FaSkating className="animate-bounce" /> : "Create Acount"}
                      </button>
                    </div>
                    <h1 className="text-center mt-3">Already registered? Go to <span className="text-green-800 font-semibold underline"><Link to='/login'>SIGN IN</Link></span></h1>
                </form>
            </div>
        </div>
    );
};

export default Register;