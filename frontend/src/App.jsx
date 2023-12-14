/* eslint-disable */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "@components/layout/Layout";
import Home from "@pages/Home/Home";
import Map from "@pages/Map/Map";
import Chronicles from "@pages/Chronicles/Chronicles";
import Timeline from "@pages/Timeline/Timeline";
import Auth from "@pages/Authentification/Auth";
import Shop from "@pages/Shop/Shop";
import Cart from "@pages/Cart/Cart";
import Profile from "@pages/Profile/Profile";
import { UserContextProvider } from "./contexts/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/chronicles" element={<Chronicles />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </div>
    </UserContextProvider>
  );
}

export default App;
