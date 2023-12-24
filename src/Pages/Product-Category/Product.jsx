import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/public/product.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-sans font-bold text-center uppercase mt-20">
        Products Category
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-32">
        {data?.map((singleData) => (
          <div className="card w-full h-full bg-base-100 border  border-dashed border-red-200  shadow-xl">
            <figure>
              <img
                className="w-full px-4 py-2 h-[250px]"
                src={singleData?.image}
                alt="sirt"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {singleData?.title}
                <div className="badge badge-secondary uppercase">new</div>
              </h2>
              <p>Price: ${singleData.price}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${singleData?.category}`}>
                  {" "}
                  <button className="badge badge-outline hover:bg-blue-500  hover:text-white">
                    view details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
