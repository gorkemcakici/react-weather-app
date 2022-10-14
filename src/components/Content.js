import CurrentCard from "components/CurrentCard";
import DailyCard from "components/DailyCard";
import { useSelector } from "react-redux";
const Content = () => {
  const weather = useSelector((state) => state.weather.weather);

  if (Object.keys(weather).length > 0) {
    return (
      <div className="flex flex-col gap-y-10 md:gap-y-20 p-5 flex-1 mt-10">
        <CurrentCard />
        <DailyCard />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-[calc(100vh-80.28px)] p-5">
      <p className="text-center text-white text-xs md:text-lg lg:text-2xl bg-neutral-800 p-5 rounded-tl-2xl rounded-br-2xl">
        Choose a location or grant location permission
      </p>
    </div>
  );
};

export default Content;
