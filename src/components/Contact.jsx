
const Contact = () => {
  return (
    <section className="bg-green-900 py-20 my-10 text-white lg:w-10/12 w-full mx-auto rounded sm:px-4 md:px-8 px-4">
      <div className="mx-auto max-w-7xl ">
        <div className="grid lg:grid-cols-2 gap-4 ">
          <div className="space-y-4">
            <h1 className="text-4xl font-medium">Contact With Us</h1>
            <p className="pr-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              minima laboriosam, ipsum corporis totam corrupti?Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Natus minima laboriosam,
              ipsum corporis totam corrupti?
            </p>
            <p>+88016013216003</p>
            <p>Rajshahi, Bangladesh</p>
          </div>
          <div>
            <form className="bg-green-900">
              <div className="grid grid-cols-2 gap-4 rounded">
                <div>
                  <input
                    className="bg-green-700 text-white px-4 py-3 w-full rounded"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    className="bg-green-700 text-white px-4 py-3 w-full rounded"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    className="bg-green-700 text-white px-4 py-3 w-full rounded"
                    type="text"
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <input
                    className="bg-green-700 text-white px-4 py-3 w-full rounded"
                    type="text"
                    placeholder="Doctor Name"
                  />
                </div>
                <div>
                  <input
                    className="bg-green-700 text-white px-4 py-3 w-full rounded"
                    type="text"
                    placeholder="Date"
                  />
                </div>
                <div>
                  <input
                    className="bg-green-700 text-white px-4 py-3 w-full rounded"
                    type="text"
                    placeholder="Time"
                  />
                </div>
              </div>
              <div className="my-4">
                <button className="btn btn-error bg-[#F7A582] py-4 rounded-md font-bold text-white w-full">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
