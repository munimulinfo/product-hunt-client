import { FaCalendar, FaDollarSign, FaLocationArrow, FaStar } from "react-icons/fa";

const OurExpertDoctors = () => {
  return (
    <div>
      <div className="text-center w-9/12 mx-auto space-y-3">
        <h1 className="font-bold text-4xl ">OurExpertDoctors</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8 lg:w-10/12 mx-auto">
        <div className="border border-gray-600 p-3 space-y-4 rounded-md">
          <img
            className="rounded-md"
            src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1697092167~exp=1697092767~hmac=4bffa593ff64bf64f86b11386735fbb1dd6cc4ce52ca752f3ad881a9bfd99bcc"
            alt=""
          />
          <div>
            <h1>Karyen Anderson</h1>
            <p>BTP - Senior Physiotherapist</p>
          </div>
          <p className="flex">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </p>
          <div className="space-y-2">
            <p className="flex gap-2 items-center">
              <FaLocationArrow /> Dhanmondi, Dhaka, Bangladesh
            </p>
            <p className="flex gap-2 items-center">
              <FaCalendar /> Available On Mon, 22 December
            </p>
            <p className="flex gap-2 items-center">
              <FaDollarSign /> 17
            </p>
          </div>
          <button className="border font-semibold border-[#F7A582] py-2 w-full rounded-md">
            View Profile
          </button>
        </div>
        <div className="border border-gray-600 p-3 space-y-4 rounded-md">
          <img
            className="rounded-md"
            src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=740&t=st=1697092176~exp=1697092776~hmac=dd5c2c031f45a13588488e1eaf698764d1e44b6ac90097b90662ca7f12ef0547"
            alt=""
          />
          <div>
            <h1>Karyen Anderson</h1>
            <p>BTP - Senior Physiotherapist</p>
          </div>
          <p className="flex">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </p>
          <div className="space-y-2">
            <p className="flex gap-2 items-center">
              <FaLocationArrow /> Dhanmondi, Dhaka, Bangladesh
            </p>
            <p className="flex gap-2 items-center">
              <FaCalendar /> Available On Mon, 22 December
            </p>
            <p className="flex gap-2 items-center">
              <FaDollarSign /> 17
            </p>
          </div>
          <button className="border font-semibold border-[#F7A582] py-2 w-full rounded-md">
            View Profile
          </button>
        </div>
        <div className="border border-gray-600 p-3 space-y-4 rounded-md">
          <img
            className="rounded-md"
            src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=740&t=st=1697092258~exp=1697092858~hmac=ed774f6c3253247a49553dc5f295b6e75628900ca1bec143433f5fc159c47b9a"
            alt=""
          />
          <div>
            <h1>Karyen Anderson</h1>
            <p>BTP - Senior Physiotherapist</p>
          </div>
          <p className="flex">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </p>
          <div className="space-y-2">
            <p className="flex gap-2 items-center">
              <FaLocationArrow /> Dhanmondi, Dhaka, Bangladesh
            </p>
            <p className="flex gap-2 items-center">
              <FaCalendar /> Available On Mon, 22 December
            </p>
            <p className="flex gap-2 items-center">
              <FaDollarSign /> 17
            </p>
          </div>
          <button className="border font-semibold border-[#F7A582] py-2 w-full rounded-md">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurExpertDoctors;
