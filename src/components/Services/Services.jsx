
import { FaLocationArrow, FaPhone, FaStopwatch } from "react-icons/fa";
import CareerTab from "../CareerTab";
// import den from '../../../public/den.png'
const Services = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto my-32">
      <div className="md:flex gap-5">
        <div className="md:ml-16">
          <img
            className="md:w-[1300px] w-full h-[740px] rounded-md"
            src="https://img.freepik.com/free-photo/smiling-blonde-female-doctor-poses-blue-gloves-studio_8353-5068.jpg?w=360&t=st=1691387552~exp=1691388152~hmac=5286d92c1abeece9c647c8c004c16d21a83505cac17c7a5eece5b726be7b10b3"
            alt=""
          />
        </div>

        {/* 2 nd div */}
        <div className="space-y-6 text-left">
          {/* 1st div  */}
          <div>
            <h1 className="text-3xl font-bold mb-2 text-black">Our Services</h1>
            <p className="text-[#537696] text-justify">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <div className="border border-gray-300 flex justify-between my-3 rounded-lg">
              <CareerTab/>
              {/* <div className="py-4 px-3 text-xl font-bold bg-orange-400 rounded-md text-black">
                Cavity Protection
              </div>
              <div className="py-4 px-3 text-xl font-bold text-black">
                Cosmetic Dentisty
              </div>
              <div className="py-4 px-3 text-xl font-bold text-black">
                Oral Surgery
              </div> */}
            </div>
          </div>
          {/* 2nd div  */}
          {/* <div>
            <img
              className="w-[590px] h-[260px] rounded-lg"
              // src={den}
              // alt=""
              src="https://img.freepik.com/free-photo/white-teeth_144627-6525.jpg?w=740&t=st=1691387606~exp=1691388206~hmac=c86871e237ea9f8a0b56fadfe117a71bd2b5020f1b473d126c319d043d23d505"
              alt=""
            />
          </div> */}
          {/* 3 rd div  */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-black">
              Electro Gastrology Therapy
            </h1>
            <p className="text-[#537696] text-justify">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis.
            </p>
            <p className="text-[#537696] text-justify">
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae dicta sunt.
            </p>
            {/* <button className=""></button> */}
            <button className="outline outline-offset-2 outline-1 ... text-xl px-3 py-[2px] text-semibold font-semibold text-[#ff783f] rounded-sm ">
              More Details
            </button>
          </div>
        </div>
      </div>

      <div className="my-16 text-white md:flex justify-around md:px-14 md:ml-2 gap-5">
        <div className="flex bg-[#07332F] px-8 py-9 gap-5 rounded-md w-80">
          <div className="text-3xl">
            <FaStopwatch />
          </div>
          <div>
            <h1 className="font-bold text-xl">Opening Hours</h1>
            <p>
              Open 9.00 am to 5.00pm <br /> Everyday
            </p>
          </div>
        </div>

        <div className="flex bg-[#fc996e] px-8 py-9 gap-5 rounded-md w-80">
          <div className="text-3xl">
            <FaLocationArrow />
          </div>
          <div>
            <h1 className="font-bold text-xl">Our Locations</h1>
            <p>
              Dhanmondi 17, Dhaka -1200, <br /> Bangladesh Dhaka
            </p>
          </div>
        </div>

        <div className="flex bg-[#07332F] px-8 py-9 gap-5 rounded-md w-80">
          <div className="text-3xl">
            <FaPhone />
          </div>
          <div>
            <h1 className="font-bold text-xl">Contact Us</h1>
            <p>
              +88 01750 00 00 00 <br /> +88 01750 00 00 00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
