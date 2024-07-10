// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

Text.propTypes = {
  children: PropTypes.node.isRequired,
};
export default function ListingItem({ listing }) {
  return (
    <div className=" bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden  rounded-lg w-full sm:w-[320px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
          src={
            listing.imageUrls[0] ||
            "https://i.ibb.co/vzx81YY/pexels-pixabay-53610.jpg"
          }
          alt={listing.name}
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="text-lg font-semibold text-slate-700 truncate">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="text-green-700 w-4 h-4" />
            <p className="text-sm font-semibold text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="line-clamp-2 text-sm text-gray-600 ">
            {listing.description}
          </p>
          <p className="text-slate-700 mt-2 font-semibold ">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && "/month"}
          </p>
          <div className="text-slate-700 flex items-center gap-4">
            <div className="font-bold text-xs ">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Beds`
                : `${listing.bedrooms} Bed`}
            </div>
            <div className="font-bold text-xs ">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Baths`
                : `${listing.bathrooms} Bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
