import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Context";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const Productdetails = () => {
  const [details, setDetiails] = useState([]);
  const id = useParams();
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const [axiosSecure] = useAxios();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setDetails(data))
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);
  const result = details.filter(
    (singleDetail) => singleDetail?.category === id?.category
  );
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddToCart = (data) => {
    const postCartData = {
      ...data,
      productQuantity: quantity,
      useremail: user?.email,
    };
    axiosSecure
      .post("/postcart", postCartData)
      .then((response) => {
        // Assuming a successful response indicates successful addition to cart

        Swal.fire({
          title: "Product Added to Cart!",
          text: "Your item has been successfully added to your cart.",
          icon: "success",
          confirmButtonText: "Great!",
        });
        refetch();
      })
      .catch((error) => {
        // Handle any errors that occur during the POST request
        Swal.fire({
          title: "Oops...",
          text: "There was an error adding the product to your cart. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className=" flex justify-center items-center py-40">
      {result?.map((product) => (
        <div className="card card-side bg-base-100 shadow-xl md:p-10 border border-dashed border-red-200">
          <figure>
            <img src={product?.image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold uppercase">
              {product?.title}
              <div className="badge badge-secondary uppercase">details</div>
            </h2>
            <p>Price: ${product?.price}</p>
            <div className="flex justify-center items-start gap-4">
              <p>
                Availabe Size:{" "}
                {product?.size?.map((newSize) => (
                  <li>{newSize}</li>
                ))}
              </p>
              <p className="">
                Available Color:{" "}
                {product?.color?.map((singleColor) => (
                  <li>{singleColor}</li>
                ))}
              </p>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSubmit(handleAddToCart)}>
                <select
                  {...register("size", { required: true })}
                  className={`select w-full ${
                    errors.size && "select-error"
                  } select-error mb-2`}
                >
                  <option value="M">M</option>

                  <option value="L">L</option>

                  <option value="XL">XL</option>

                  <option value="XXL">XXL</option>
                </select>
                {errors.size && (
                  <span className="invalid-feedback">
                    {errors.size.message}
                  </span>
                )}

                <select
                  {...register("color", { required: true })}
                  className={`select w-full ${
                    errors.color && "select-error"
                  } select-error mb-2`}
                >
                  {product.color.map((newpclor) => (
                    <option key={newpclor} value={newpclor}>
                      {newpclor}
                    </option>
                  ))}
                </select>
                {errors.color && (
                  <span className="invalid-feedback">
                    {errors.color.message}
                  </span>
                )}

                <div className="quantity-input mb-2 flex justify-center items-center gap-5">
                  <p
                    className="quantity-btn cursor-pointer btn btn-xs btn-error"
                    onClick={handleDecrement}
                  >
                    -
                  </p>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="input w-full input-bordered input-success"
                  />
                  <p
                    className="quantity-btn cursor-pointer btn btn-xs btn-success"
                    onClick={handleIncrement}
                  >
                    +
                  </p>
                </div>

                <div className="card-actions">
                  <button
                    type="submit"
                    className="btn btn-warning btn-xs text-white"
                  >
                    Add To Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productdetails;
