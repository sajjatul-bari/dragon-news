import Header from "../Shared/Header/Header";
import LeftSiteNavbar from "../Shared/LeftSideNavbar/LeftSiteNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";
import News from "./News/NewsPaper";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto justify-center">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-4 gap-5">
        <div className="">
          <LeftSiteNavbar></LeftSiteNavbar>
        </div>

        <div className="border col-span-2">
          <News></News>
        </div>

        <div>
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
