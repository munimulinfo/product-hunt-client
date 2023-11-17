import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Context';
import AllRellsDesign from './AllRellsDesign';
import useAxios from '../Hooks/useAxios';
import CreateRells from './CreateRells';
import Swal from 'sweetalert2';

const MyRells = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  const { data: singleSelfPost = [], refetch } = useQuery({
    queryKey: ['singleSelfPost', user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/selfpost?email=${user?.email}`)
      return res.data;
    },
  })

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
      <CreateRells refetch={refetch}></CreateRells>
      <div className="grid md:grid-cols-1 justify-items-center gap-10 mt-10 ">
        {singleSelfPost?.map((selfpost) => (
          <AllRellsDesign
            key={selfpost?._id}
            selfpost={selfpost}
            singleSelfPost={singleSelfPost}
            handleDelete={handleDelete}
          ></AllRellsDesign>
        ))}
      </div>
    </div>
  );
};

export default MyRells;