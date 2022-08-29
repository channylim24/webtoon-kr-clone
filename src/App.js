import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Weekday from "./pages/weekday/Weekday";

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/webtoon/weekday" element={<Weekday />} />
        </Routes>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
