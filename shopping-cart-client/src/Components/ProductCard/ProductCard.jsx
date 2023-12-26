/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../Store/action-types/cart";

const ProductCard = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosPublic
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, [axiosPublic]);

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.product}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Price: ${product.price.toFixed(2)}
            </span>
            <button
              onClick={{
                type: ADD_TO_CART,
                payload: product,
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
