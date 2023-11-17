import React from 'react';
import { FaUser } from 'react-icons/fa';

const Comment = ({ commentInfo }) => {
    const { userPhoto, userName, comment } = commentInfo;
  return (
    <div className="flex items-center gap-2 mt-3">
      <div >
       {userPhoto ? <img className="h-10 w-10 rounded-full" src={userPhoto} alt="user Photo" /> :
        <FaUser className="h-10 w-10 rounded-full"></FaUser>} 
      </div>
      <div className="">
        <h1 className='font-bold text-lg'>{userName}</h1>
        <p className='-mt-1'>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;