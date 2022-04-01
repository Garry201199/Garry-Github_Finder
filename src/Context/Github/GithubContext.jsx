import { createContext,  useContext,  useReducer} from "react";
import axios from 'axios'
import GithubReducers from '../Github/GithubReducers'

const GithubContext = createContext();
// const TOKEN = "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";
// const URL = "https://api.github.com";

export const GithubProvider = ({ children }) => {

    const initialState ={
        users :[],
        user:{},
        repos:[],
        loading: false
    }
    const [state , dispatch]= useReducer(GithubReducers, initialState)

// get Search Users
  const searchUsers = async (text) => {
    setLoading()
    setTimeout( async () => {
     await axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((res) => {
        
        dispatch({
            type: 'GET_USERS',
            payload: res.data.items
        })

        console.log(res.data.items);
      }); 
    }, 2000);
  };

  // get single  User and its repos and it is done by axios.all like promise.all
  const getUserAndRepos = async (login) => {
    setLoading()
    await axios.all([axios.get(`https://api.github.com/users/${login}`) 
  , axios.get(`https://api.github.com/users/${login}/repos`)])

  .then(
    axios.spread((...res) => {
      console.log(res[1].data)
      dispatch({
        type: 'GET_USER',
        payload: res[0].data}) 
      dispatch({
          type: 'GET_REPOS',
          payload: res[1].data}) 
    })
  )

    //  await axios
    //   .get(`https://api.github.com/users/${login}`)
    //   .then((res) => {
    //     if(res.status === 404) {
    //       window.location ='/notfound'
    //     }
    //     else{
    //       console.log(res.data)
    //      dispatch({
    //         type: 'GET_USER',
    //         payload: res.data}) 
    //     }
    //    }); 
  };

// clear Users
    const clearUsers=()=>{
      console.log(initialState.users);
      dispatch({
        type: 'CLEAR_USERS'
      })
    }

  //set Loading before any request made
  const setLoading =()=>{
    dispatch({
      type : 'SET_LOADING'
    })
  }
    
 

  return <GithubContext.Provider
  value={{
      users: state.users ,
       loading: state.loading ,
       user : state.user,
       repos: state.repos,
        searchUsers,
        clearUsers,
        getUserAndRepos,
        
  }}
  >
      {children}

  </GithubContext.Provider>
};

export default GithubContext
