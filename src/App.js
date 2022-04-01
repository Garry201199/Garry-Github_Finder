import Navbar from "./Comp/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Comp/Layout/Footer";
import Home from "../src/Comp/Pages/Home";
import About from "../src/Comp/Pages/About";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GithubProvider } from "./Context/Github/GithubContext";
import { AlertProvider } from "./Context/Alert/AlertContext";

import NotFound from "../src/Comp/Pages/NotFound";
import User from "./Comp/Pages/User";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar title="Github Finder" />

            <div className="h-fit flex justify-center bg-gradient-to-r from-purple-300 to-pink-300">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:login" element={<User />}></Route>
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </div>
            <Footer></Footer>
          </Router>
        </ThemeProvider>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
