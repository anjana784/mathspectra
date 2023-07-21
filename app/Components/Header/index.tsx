import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-screen h-16 bg-lightBlack border-b-[1px] border-solid border-primaryBlue">
      <div className="w-[95%] h-full m-auto">
        <div className="w-full h-full flex">
          <div className="w-1/5 h-full flex justify-center items-center">
            <div
              style={{
                width: "70%",
                height: "60%",
                backgroundImage: `url(/images/logo.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="w-4/5 h-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
