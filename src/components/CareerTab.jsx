import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CareerTab() {
  let [categories] = useState({
    Cavity_Protection: [
      {
        id: 1,
        // title: "Electro Gastrology Therapy",
        // details:
        //   "After signing up to TechCareer, you start to set up your profile and find the hottest & latest tech jobs.",
        image:
          "https://img.freepik.com/free-photo/white-teeth_144627-6525.jpg?w=740&t=st=1691387606~exp=1691388206~hmac=c86871e237ea9f8a0b56fadfe117a71bd2b5020f1b473d126c319d043d23d505",
      },
    ],
    Cosmetic_Dentisty: [
      {
        // id: 2,
        // title: "Create A Pro CV",
        // details:
        //   "Techcareer gives you more than 500 pre-made CV samples for candidates to personalize their CVs.",
        image:
          "https://img.freepik.com/free-photo/dentist-with-smile_144627-884.jpg?w=826&t=st=1697089928~exp=1697090528~hmac=4195b2e5e7b7c65c28d494d5b3f883dc007ff787f22572448d0fb085ed24603d",
      },
    ],
    Oral_Surgery: [
      {
        // id: 3,
        // title: "Get Applied",
        // details:
        //   "When owning a CV, don't hesitate to submit your CV to easily apply for a job from Tech companies.",
        image:
          "https://img.freepik.com/free-photo/dentist-with-smile_144627-889.jpg?w=740&t=st=1697089946~exp=1697090546~hmac=2459167e3c7bc088d3c9a351fe08447014c10b267a3b2d1843c2ec52b8a1bc69",
      },
    ],
  });

  return (
    <div className="w-full my-5 mx-2 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white text-black ring-opacity-60 ring-offset-2 ring-offset-[#09867E] focus:outline-none focus:ring-2",
                  selected
                    ? "bg-orange-400 text-white shadow"
                    : "text-black dark:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white dark:bg-[#121928] p-3",
                "ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative text-black flex flex-col justify-center items-center lg:px-2  px-3  rounded-md"
                  >
                    {/* <button className="border-2 border-gray-600 rounded-full absolute md:-top-8 -top-6  md:w-16 w-12 h-12 md:h-16 bg-white text-center text-xl font-bold">
                      {post.id}
                    </button> */}
                    <img
                      className="w-[590px] h-[260px] rounded-lg"
                      src={post.image}
                      alt="images"
                    />
                    <h3 className="md:text-2xl text-lg font-bold">
                      {post.title}
                    </h3>
                    <p className="md:text-lg text-center">{post.details}</p>
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
