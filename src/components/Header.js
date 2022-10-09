import { useSelector } from "react-redux";
import { setPlaceInput,setPlace } from "store/place";
import { useDispatch } from "react-redux";
const Header = () => {
  const placeInput = useSelector((state) => state.place.placeInput);
  const places = useSelector((state) => state.place.places);


  const dispatch = useDispatch();

  const getWeatherData = (lat,lon,name) => {
    dispatch(setPlace({
      lat,
      lon,
      name
    }));
    dispatch(setPlaceInput(""))
  }

  
  return (
    <div className="flex justify-center items-center bg-neutral-800 w-full p-4">
      <div className="">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2862/2862807.png"
          alt=""
          width={50}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col w-3/4 md:w-1/2 lg:w-1/3 justify-center items-center relative">
          <input
            id="searchPlace"
            type="text"
            className="border-b text-sm block w-full p-2.5 placeholder-gray-200 text-white outline-none bg-transparent"
            placeholder="Search for a place..."
            value={placeInput}
            onChange={(e) => dispatch(setPlaceInput(e.target.value))}
          />
          {places.length > 0 && placeInput.length > 0 && (
            <div
              id="childSearchPlace"
              className="flex flex-col gap-y-3 absolute bg-neutral-800 top-full w-full z-50 py-2"
            >
              {places.map((place, index) => (
                <div
                  id={"childInput" + index}
                  key={index}
                  className="cursor-pointer p-2 hover:bg-neutral-500"
                  onClick={()=>getWeatherData(place.lat,place.lon,place.name)}
                >
                  <span className="text-white font-semibold">
                    {place.country} - {place.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
