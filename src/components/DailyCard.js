import { useSelector } from "react-redux";
import moment from "moment";
const DailyCard = () => {
  const weather = useSelector((state) => state.weather.weather);
  return (

        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col md:flex-row gap-y-5 justify-center items-center md:gap-x-5 md:flex-wrap xl:flex-nowrap">
            {weather.daily.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-5 justify-center items-center bg-neutral-800 py-4 rounded-lg w-full md:w-1/6"
              >
                <div className="flex flex-col gap-y-1 items-center justify-center">
                  <span className="text-white text-center">
                    {moment(new Date(item.dt * 1000)).format("dddd")}
                  </span>
                  <span className="text-white text-center">
                    {moment(new Date(item.dt * 1000)).format("ll")}
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt=""
                    width={100}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-white text-center">
                    {Math.round(item.temp.max)}° -{" "}
                    <span className="text-gray-400">
                      {Math.round(item.temp.min)}° C
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
  
  );
};

export default DailyCard;
