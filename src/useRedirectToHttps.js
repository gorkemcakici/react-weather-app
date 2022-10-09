const UseRedirectToHttps = () => {
  if (window.location.protocol !== "https:") {
    window.location.replace(
      "https://gorkem-weatherapp.herokuapp.com/"
    );
  }
};

export default UseRedirectToHttps;
