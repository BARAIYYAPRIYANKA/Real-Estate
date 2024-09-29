import { BathIcon, BedIcon, Diamond, Heart, IndianRupee } from "lucide-react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleLike } from "../store/slices";

function Cards({ data }) {
  const dispatch = useDispatch();

  const handleLike = (index) => {
    dispatch(toggleLike(index));
  };

  return (
    <div className="flex flex-wrap gap-8 justify-center items-center p-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl w-96 bg-white"
        >
          <img
            src={item.imgurl}
            alt={item.title}
            className="object-cover w-full h-80 rounded-t-xl"
          />
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-blue-500 text-2xl font-semibold flex items-center">
                <IndianRupee className="mr-1" /> {item.price}/day
              </h1>
              <span
                className="cursor-pointer text-red-500 hover:text-red-700"
                onClick={() => handleLike(index)}
              >
                {!item?.liked ? (
                  <Heart className="stroke-current" />
                ) : (
                  <Heart className="fill-current" />
                )}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.address}</p>
            <hr />
            <div className="flex justify-between text-gray-600 mt-4">
              <div className="flex items-center gap-2">
                <BedIcon className="text-blue-500" />
                <p>{item.beds} Beds</p>
              </div>
              <div className="flex items-center gap-2">
                <BathIcon className="text-blue-500" />
                <p>{item.bath} Baths</p>
              </div>
              <div className="flex items-center gap-2">
                <Diamond className="text-blue-500" />
                <p>{item.sqft} sqft</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Cards.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Cards;
