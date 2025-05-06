"use client";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    // Function to fetch product details using axios
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/mehul/products/${id}`
        ); // Replace with your API endpoint
        console.log(response.data);
        setProduct(response.data.data); // Set product data from the response
      } catch (err) {
        setError("Failed to fetch product details.");
        console.error("Error fetching product details:", err);
      } finally {
        setLoading(false); // Set loading to false after request completion
      }
    };

    fetchProductDetails();
  }, [id]); // Re-fetch when the product ID changes

  if (loading) {
    return <div>Loading...</div>; // Display loading text while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display error if fetching fails
  }

  if (!product) {
    return <div>No product found.</div>; // Handle case where no product is found
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden max-w-[30rem] max-h-[35rem]">
              <img
                alt=""
                src={product.image}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-1-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                {product.name}
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {product.brand}
              </h1>
            </div>

            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {product.category}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">
                  {/*₹Price*/}₹{product.price}
                </p>
                {/* <p className="line-through opacity-50">₹RealPrice</p>
                <p className="text-green-600 font-semibold">70% off</p> */}
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                onClick={() => navigate(`/`)}
              >
                Back to Products
              </button>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Description
                </h3>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights?.map((highlight, i) => (
                      <li key={i} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

              {/* <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">details</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
