import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaces, setPlace } from "store/place";
import { setWeather } from "store/weather";
import Loading from "react-fullscreen-loading";
import Header from "components/Header";
import Content from "components/Content";
import Footer from "components/Footer";
import UseRedirectToHttps from "useRedirectToHttps";
function App() {
  const isInitialMountPlace = useRef(true);
  const isInitialMountPlaceInput = useRef(true);

  const placeInput = useSelector((state) => state.place.placeInput);
  const place = useSelector((state) => state.place.place);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getWeatherData = async (lat, lon) => {
    setLoading(true);
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${key}`
      );

      data.daily.shift();
      dispatch(setWeather(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlaces = async () => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${placeInput}&limit=5&appid=${key}`
      );

      dispatch(setPlaces(data));
    } catch (error) {
      console.log(error);
    }
  };

  const reverseGeocoding = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${key}&limit=5`
      );

      dispatch(
        setPlace({
          lat,
          lon,
          name: data[0].state ? data[0].state : data[0].name,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    UseRedirectToHttps();
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (isInitialMountPlaceInput.current) {
      isInitialMountPlaceInput.current = false;
    } else {
      if (placeInput.length > 0) {
        getPlaces();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeInput]);

  useEffect(() => {
    if (isInitialMountPlace.current) {
      isInitialMountPlace.current = false;
    } else {
      getWeatherData(place.lat, place.lon);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place]);

  useEffect(() => {
    if (latitude && longitude) {
      reverseGeocoding(latitude, longitude);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  document.body.addEventListener("click", (e) => {
    if (
      e.target.id !== "searchPlace" &&
      document.getElementById("childSearchPlace")
    ) {
      dispatch(setPlaces([]));
    }
  });
  if (loading) {
    return <Loading loading background="#262626" loaderColor="#ffffff" />;
  }

  return (
    <div className="flex flex-col">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
