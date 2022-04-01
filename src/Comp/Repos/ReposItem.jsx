import React from "react";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
const ReposItem = ({ i }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = i;
  return (
    <div>
      <div className="mb-2 rounded-md card text-white bg-gray-700 hover:bg-gray-900">
        <div className="m-3 p-3">
          <h3 className="mb-2 text-xl font-semibold">
            <a href={html_url}>
              <LinkRoundedIcon className="mr-4" />
              {name}
            </a>
          </h3>
          <p className="mb-2 text-ellipsis truncate"> {description}</p>
          <div className="grid grid-cols-4 ">
            <div>
              <div className=" badge  badge-info badge-lg">
                <FaEye className="mr-2" />
                {watchers_count}
              </div>
            </div>

            <div>
              <div className="badge  badge-error badge-lg">
                <FaInfo className="mr-2" />
                {open_issues}
              </div>
            </div>

            <div>
              <div className=" badge  badge-warning badge-lg">
                <FaUtensils className="mr-2" />
                {forks}
              </div>
            </div>

            <div>
              <div className="badge badge-success badge-lg">
                <FaStar className="mr-2" />
                {stargazers_count}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReposItem;
