import React, { useState, useContext } from "react";

import GithubContext from "../../Context/Github/GithubContext";
import AlertContext from "../../Context/Alert/AlertContext";
import Alert from "../Layout/Alert";

const UserSearch = () => {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("please enter the proper Username ", "error");
    } else {
      //search text
      console.log(text);
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8">
        {/* grid 1st col */}
        <div className="grid grid-rows-2 grid-flow-col ">
          <div
            className="flex items-center xl:justify-end  lg:justify-end  md:justify-end  " >
            <Alert></Alert>
          </div>

          <div>
            <div
              className="flex items-center
          xl:justify-end  lg:justify-end  md:justify-end 
          "
            >
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="h-12 w-96	 pl-10 pr-20 rounded-full z-0 focus:shadow caret-blue-500 md:caret-indigo-500 focus:outline-none"
                    placeholder="Search users..."
                  />
                  <div className="absolute top-0 right-0">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-full "
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* grid 2nd col */}
        {users.length !== 0 ? (
          <div className="grid grid-rows-2 m-3 grid-flow-col ">
            <div></div>

            <div>
            
              <div
                onClick={clearUsers}
                className="btn w-20 mb-2 btn-ghost  xl:items-center lg:items-center md:items-center rounded-full"
              >
                Clear
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
