import React from "react";
import { Link } from "react-router-dom";
import not from "../../Img/404.png";
import HomeIcon from "@mui/icons-material/Home";
const NotFound = () => {
  return (
    <>
      <div className="container ">
        <div className="flex flex-row items-center">
        <div className="flex-1  gap-4 ml-16">
          <h5 className="text-5xl text-purple-900 font-bold font-nunito">OOPS!!</h5>
          <h5 className="text-3xl text-purple-900 font-nunito">404 - Page Not Found...</h5>

          <h4 className="text-purple-100 m-9 btn btn-secondary ">
            <Link to="/">
              <HomeIcon /> Back To Home
            </Link>
          </h4>
        </div>

        <div className="flex-1">
          <div className="  carousel-item">
            <img
              src={not}
              style={{ height: "600px", width: "700px" }}
              alt="Burger"
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
