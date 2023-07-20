import { FC } from "react";
import SideBar from "./Components/SideBar";
import MainCanvas from "./Components/MainCanvas";

const Home: FC = () => {
  return (
    <div className="w-screen h-[calc(100vh_-_7rem)] bg-lightBlack">
      <div className="w-full h-full">
        <div className="w-full h-full flex">
          <div className="w-1/3 h-full">
            <SideBar />
          </div>
          <div className="w-2/3 h-full bg-darkBlack">
            <MainCanvas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
