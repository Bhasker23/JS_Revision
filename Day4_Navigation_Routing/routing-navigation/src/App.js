import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Navbar from "./componentes/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import FreePricing from "./pages/FreePricing";
import PremiumPricing from "./pages/PremiumPricing";
import Protected from "./pages/Protected";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route element={<Protected />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/pricing" element={<Pricing />}>
          <Route path="free" element={<FreePricing />} />
          <Route path="premium" element={<PremiumPricing />} />
        </Route>
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
