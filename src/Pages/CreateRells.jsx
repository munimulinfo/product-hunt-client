import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/Context";
import useAxios from "../Hooks/useAxios";
import { getCurrentTimeStamp } from "../Hooks/useTime";
import useSingleUser from "../Hooks/useSingleUser";
import { FaUser } from "react-icons/fa";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const CreateRells = ({ refetch }) => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const [singleUser] = useSingleUser();
    // console.log(singleUser);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const [isOpen, setIsOpen] = useState(false);
    //    modal open function
    const openModal = () => {
        setIsOpen(true);
    };
    //   modal close functio
    const closeModal = () => {
        setIsOpen(false);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Make the POST request
    const onSubmit = (data) => {
        const imgdata = new FormData();
        imgdata.append("image", data.image[0]);
        fetch(img_hosting_url, {
            method: "POST",
            body: imgdata,
        })
            .then((res) => res.json())
            .then((uploadImage) => {
                if (uploadImage.success) {
                    const imgUrl = uploadImage.data.display_url;
                    const { text } = data;
                    const selfPost = {
                        text,
                        userName: user?.displayName,
                        userPhoto: user?.photoURL,
                        email: user?.email,
                        image: imgUrl,
                        timeStamp: getCurrentTimeStamp("LLL"),
                        userId: singleUser[0]?._id,
                    };
                    axiosSecure.post("/selfpost", selfPost).then((data) => {
                        if (data.data.insertedId) {
                            reset();
                            refetch();
                            toast.success("Post Add Successfully!");
                        }
                    });
                }
            });
    };

    return (
        <div>
            <div className="shadowdiv border rounded-lg p-5 md:w-7/12 mx-auto ">
                <div className=" flex gap-3 items-center mb-4">
                    <div className="">
                        {user?.photoURL ? <img className="w-10 h-10 rounded-full" src={user?.photoURL} /> :
                            <FaUser className="w-10 h-10 rounded-full"></FaUser>
                        }
                    </div>
                    <button
                        className="py-2 w-full text-start ps-5 bg-slate-100 hover:bg-slate-200 rounded-full text-lg"
                        onClick={openModal}
                    >
                        What's on your mind?
                    </button>
                </div>
            </div>
            {/* post input form */}
            {isOpen && (
                <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                    open
                >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        method="dialog"
                        className="modal-box"
                    >
                        <h1 className="text-center text-lg font-semibold -mt-3 mb-3">
                            Create Rells
                        </h1>
                        <hr />
                        {/* user information */}
                        <div className="mt-3">

                            <div className="flex items-center gap-3">
                                {user?.photoURL ? <img className="w-10 h-10 rounded-full" src={user?.photoURL} /> :
                                    <FaUser className="w-10 h-10 rounded-full"></FaUser>
                                }
                                <div className="">
                                    <p className="font-bold">{user?.displayName}</p>
                                    <button className="btn btn-xs">Public</button>
                                </div>
                            </div>
                        </div>
                        {/* text file post */}
                        <div className="mt-5">
                            <textarea
                                {...register("text")}
                                rows="5"
                                placeholder="What's on you mind?"
                                className="rounded-md px-3 py-2  w-full bg-slate-100 text-xl"
                            ></textarea>
                            {errors.text && (
                                <span className="text-red-800">text is required</span>
                            )}
                        </div>
                        {/* upload image file */}
                        <div>
                            <input
                                className="file-input file-input-bordered file-input-success w-full"
                                type="file"
                                {...register("image")}
                            />
                        </div>
                        <button className="w-full py-2 mt-3 bg-[#09867E] rounded-md text-white cursor-pointer">
                            <input type="submit" value="Post" />
                        </button>
                        {/* modal clone button */}
                        <div className="modal-action">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-300"
                                onClick={closeModal}
                            >
                                &#10005;
                            </button>
                        </div>
                    </form>
                </dialog>
            )}
        </div>
    );
};

export default CreateRells;
