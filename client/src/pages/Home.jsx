// import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  SwiperCore.use([Navigation, Autoplay, EffectFade]);
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
        fetchSaleListings();
      } catch (error) {
        console.log("🚀 ~ fetchOfferListings ~ error:", error);
      }
    };
    fetchOfferListings();
  }, []);

  const fetchRentListings = async () => {
    try {
      const res = await fetch("/api/listing/get?type=rent&limit=4");
      const data = await res.json();
      setRentListings(data);
    } catch (error) {
      console.log("🚀 ~ fetchRentListings ~ error:", error);
    }
  };

  const fetchSaleListings = async () => {
    try {
      const res = await fetch("/api/listing/get?type=sale&limit=4");
      const data = await res.json();
      setSaleListings(data);
    } catch (error) {
      console.log("🚀 ~ fetchSaleListings ~ error:", error);
    }
  };
  return (
    <div>
      {/* Top section  */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-4xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span> <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-lg sm:text-xl">
          Hassan Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className="text-lg sm:text-xl text-blue-800 font-bold hover:underline:underline "
        >
          Let &apos;s get started...
        </Link>
      </div>
      {/* Swiper */}
      {offerListings && offerListings.length > 0 && (
        <div className="">
          <Swiper
            navigation
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={1500}
          >
            {offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {/* Listing results for offer , sale and rent  */}
      <div className="flex justify-center items-center">
        <div className=" max-w-8xl mx-auto p-3 flex flex-col gap-8 my-10">
          {offerListings && offerListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600">
                  Recent offers
                </h2>
                <Link
                  className="text-[15px] sm:text-lg text-blue-800 hover:underline"
                  to={"/search?offer=true"}
                >
                  Show more offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}

          {rentListings && rentListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600">
                  Recent places for rent
                </h2>
                <Link
                  className="text-[15px] sm:text-lg text-blue-800 hover:underline"
                  to={"/search?type=rent"}
                >
                  Show more places for rent
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}

          {saleListings && saleListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600">
                  Recent places for sale
                </h2>
                <Link
                  className="text-[15px] sm:text-lg text-blue-800 hover:underline"
                  to={"/search?type=sale"}
                >
                  Show more places for sale
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
