// import React from 'react'

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* rightSide */}
      <div className="p-7 md:border-r-2 border-b-2 md:min-h-screen">
        <form className=" flex flex-col gap-8 ">
          <div className="flex items-center gap-2 ">
            <label className="whitespace-nowrap"> Search Term: </label>
            <input
              type="text"
              name="search"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg w-full p-3 focus:outline-none"
            />
          </div>

          {/* Type OFF  */}
          <div className=" flex gap-2 flex-wrap items-center">
            <label className="font-semibold ">Type:</label>
            <div className="flex gap-2">
              <input type="checkbox" name="all" id="all" className="w-5" />
              <span>Rent & Sale</span>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" name="rent" id="rent" className="w-5" />
              <span>Rent</span>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" name="sale" id="sale" className="w-5" />
              <span>Sale</span>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" name="offer" id="offer" className="w-5" />
              <span>offer</span>
            </div>
          </div>

          {/* Amenities: */}
          <div className=" flex gap-2 flex-wrap items-center">
            <label className="font-semibold ">Amenities:</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="parking"
                id="parking"
                className="w-5"
              />
              <span>Parking</span>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="furnished"
                id="furnished"
                className="w-5"
              />
              <span>Furnished</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="font-semibold ">Sort:</label>
            <select
              name="sort_order"
              id="sort_order"
              className="border rounded-lg p-3 focus:outline-none "
            >
              <option value="" className="">
                Price hight to low
              </option>
              <option value="">Price low to hight</option>
              <option value="">Latest</option>
              <option value="">Oldest</option>
            </select>
          </div>

          <button className=" p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95">
            search
          </button>
        </form>
      </div>

      {/* leftSide */}
      <div className="">
        <h1 className="text-3xl font-semibold border-b px-7 p-3 md:p-3 md:mt-5    ">
          Listing results:
        </h1>
      </div>
    </div>
  );
}
