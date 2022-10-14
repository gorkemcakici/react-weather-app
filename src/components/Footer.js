import {AiFillGithub} from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-5 pb-8 gap-x-3">
      <p className="text-white">Coded by Görkem</p>
      <a href="https://github.com/gorkemcakici">
        <AiFillGithub color="white" size={24} />
      </a>
      <a href="https://www.linkedin.com/in/gorkemcakici/">
        <AiFillLinkedin color="white" size={24} />
      </a>
    </div>
  );
};

export default Footer;
