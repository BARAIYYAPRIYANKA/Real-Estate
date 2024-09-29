import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./components/Cards";
import FilterData from "./components/FilterData";
import { filterLiked, setSearch } from "./store/slices";

function App() {
  const [search, setSearchState] = useState("");
  const property = useSelector((state) => state.property.filteredProperty);
  const likedProperties = useSelector((state) => state.property.likedProperties || []); // Fallback to empty array
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearch(search));
    setSearchState("");
  };

  const handleLiked = () => {
    dispatch(filterLiked());
  };

  return (
    <div>
      <nav className="sticky top-0 bg-gray-100 shadow-md z-10 flex justify-evenly items-center py-6">
        <h1
          className="text-5xl cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => window.location.reload()}
        >
          🏠
        </h1>
        <h1 className="text-2xl xl:text-4xl font-bold tracking-wide">
          Search properties to rent
        </h1>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm w-60"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearchState(e.target.value)}
            />
            {search && (
              <button
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSearchState("")}
              >
                ✕
              </button>
            )}
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            onClick={handleLiked}
            className={`${
              likedProperties?.length > 0
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            } text-white px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 ${
              likedProperties?.length > 0
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          >
            {likedProperties?.length > 0 ? `Liked (${likedProperties.length})` : "Liked"}
          </button>
        </div>
      </nav>

      <div className="my-8">
        <FilterData />
      </div>

      <div>
        <Cards data={property} />
      </div>
    </div>
  );
}

export default App;
