import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ i }) => {
  return (
    <div>
      <div className="card w-100 bg-neutral compact  shadow-xl">
        <div className="flex flex-row items-center card-body space-4">

          <div >
              <div className="avatar rounded-full ring ring-white">
                  <div className="rounded-full shadow w-14 h-14">
                <img src={i.avatar_url} alt='avaatar'></img>
                  </div>
              </div>
            
          </div>
          <div className="flex-1">
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-nunito">
                {i.login}
              </h2>
              <Link className="text-opacity-40 text-neutral-content" to={`/user/${i.login}`}>
                  
                  Visit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
