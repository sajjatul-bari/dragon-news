import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNavbar = () => {
  return (
    <div>
      <div className="space-y-2 p-2">
        <h2 className="font-semibold text-lg mb-2">Login with</h2>
        <button className="btn btn-outline btn-accent w-full">
          <FaGoogle></FaGoogle>
          Login with Googole
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div className="p-2 mb-3">
        <h2 className="font-semibold text-lg mb-2">Find Us On</h2>
        <span className="flex items-center text-lg text-center space-x-2 border rounded-t-lg p-3">
          <FaFacebook></FaFacebook>
          <h2>Facebbok</h2>
        </span>
        <span className="flex items-center text-lg text-center space-x-2 border-x p-3">
          <FaTwitter></FaTwitter>
          <h2>Twitter</h2>
        </span>
        <span className="flex items-center text-lg text-center space-x-2 border rounded-b-lg p-3">
          <FaInstagram></FaInstagram>
          <h2>Instagram</h2>
        </span>
      </div>
      <div className="px-2 py-5 bg-slate-200">
        <h2 className="font-semibold text-lg mb-2">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div className="px-5 py-6 bg-blue-950 text-center text-white space-y-2">
        <h2 className="text-2xl font-semibold mb-2">
          Create an Amazing Newspaper
        </h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-secondary">Learn More</button>
      </div>
    </div>
  );
};

export default RightSideNavbar;
