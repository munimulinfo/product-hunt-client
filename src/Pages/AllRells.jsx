import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxios from '../Hooks/useAxios';
import AllRellsDesign from './AllRellsDesign';
import Swal from 'sweetalert2';

const AllRells = () => {
    const [axiosSecure] = useAxios();
    const { data: allselfdata = [], refetch } = useQuery(
        ["allselfdata"],
        async () => {
            const res = await axiosSecure.get("/selfpost");
            return res.data;
        }
    );
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/selfpost/${_id}`)
                    .then((data) => {
                        if (data?.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your Post has been deleted.", "success");
                            refetch();
                        }
                    });
            }
        });
    }
    return (
        <div>
            {allselfdata ? (
                <div className="grid  place-items-center  gap-10 overflow-auto  ">
                    {allselfdata?.map((selfpost) => (
                        <AllRellsDesign
                            key={selfpost?._id}
                            selfpost={selfpost}
                            handleDelete={handleDelete}
                        ></AllRellsDesign>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center mt-10 ">
                    <span className="loading loading-spinner w-14 text-success"></span>
                </div>
            )}
        </div>
    );
};

export default AllRells;