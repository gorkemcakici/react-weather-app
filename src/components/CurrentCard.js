import { useSelector } from "react-redux";

const CurrentCard = () => {
  const place = useSelector((state) => state.place.place);
  const weather = useSelector((state) => state.weather.weather);

  return (

        <div className="flex flex-col gap-y-10">
          <div className="flex justify-center items-center bg-neutral-800 w-full md:w-1/2 lg:w-1/3 mx-auto p-2 rounded-tl-2xl rounded-br-2xl">
            <h2 className="text-white text-3xl">
              {place.name ? place.name : "--"}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:justify-around items-center">
            <div className="flex flex-col items-center justify-center gap-y-6">
              <div className="flex gap-x-1">
                <span className="text-white">Today, </span>
                <span className="text-white">
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <img
                src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
                alt=""
                width={100}
              />
              <span className="text-white font-semibold">
                {weather.current.weather[0].main}
              </span>
              <span className="text-white text-3xl font-bold">
                {Math.round(weather.current.temp)} °C
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-white">
                Feels like {Math.round(weather.current.feels_like)} °C
              </span>
              <span className="text-white">
                Cloudly - {weather.current.clouds}%
              </span>
            </div>
          </div>
        </div>
  
  );
};

export default CurrentCard;
