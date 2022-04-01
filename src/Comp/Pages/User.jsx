import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../../Context/Github/GithubContext";
import { WifiLoader } from "react-awesome-loaders";
import { Link } from "react-router-dom";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import StoreMallDirectoryRoundedIcon from "@mui/icons-material/StoreMallDirectoryRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ReposList from "../Repos/ReposList";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import TourRoundedIcon from '@mui/icons-material/TourRounded';
const User = () => {
  const { getUserAndRepos, repos,  user, loading } = useContext(GithubContext);
  const params = useParams();
  const {
    name,
    avatar_url,
    type,
    bio,
    blog,
    location,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hirable,
  } = user;
  useEffect(() => {
    getUserAndRepos(params.login);
  }, []);

  if (!loading) {
    return (
      <div className="container font-nunito mx-24 sm:mx-12">
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
              <ArrowBackSharpIcon/>
              Back to Search
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6">
            <div className="rounded-lg shadow-lg card image-full">
              <figure>
                <img src={avatar_url} alt="profile"></img>
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-success">{type}</div>
              {hirable && <div className="mx-1 badge badge-info">Hirable</div>}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 mb-4 card-actions">
              <a
                className="btn btn-outline"
                href={html_url}
                target="_blank"
                rel="noreferrer"
              ><TourRoundedIcon/>
                Visit Github Profile
              </a>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat ">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
            
 
            <div className='stat'>
              <div className='stat-figure text-secondary'>
              <PeopleAltRoundedIcon
                  sx={{ marginRight: "10px" }}
                  fontSize="large"
                />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {followers}
              </div>
            </div>


            <div className="stat">
              <div className="stat-figure text-secondary">
              <BookmarkRoundedIcon
                  sx={{ marginRight: "10px" }}
                  fontSize="large"
                />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
              </div>
            </div>
            

            <div className="stat">
              <div className="stat-figure text-secondary">
                <CodeRoundedIcon
                  sx={{ marginRight: "10px" }}
                  fontSize="large"
                />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <StoreMallDirectoryRoundedIcon
                  sx={{ marginRight: "10px" }}
                  fontSize="large"
                />
              </div>
              <div className="stat-title pr-5">Public Gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>

          </div>
        </div>
        <ReposList repos={repos}></ReposList>
        
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center ">
        <WifiLoader
          background={"transparent"}
          desktopSize={"150px"}
          mobileSize={"150px"}
          text={"Loading...."}
          backColor="#fff"
          frontColor="#db2777"
        />
      </div>
    );
  }
};

export default User;
