
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Registration from "./pages/Authentication/Registration/Registration";
import Signin from "./pages/Authentication/Signin/Signin";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route exact path="/homepage" element={<HomePage />} />

            <Route path="/registration" element={<Registration />} />

            <Route path="/" element={<Signin />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
