import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./users/pages/HomePage";
import HeaderNavigation from "./shared/components/HeaderNavigation";
import UserDetails from "./users/pages/UserDetailsPage";
import PlaceDetails from "./places/pages/PlaceDetailsPage";
import AddNewPlace from "./places/pages/AddNewPlace";
import DataAuthentication from "./users/pages/Authentication";
function App() {
  return (
    <>
      <Router>
        <div className="app-header">
          <HeaderNavigation />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/places/:id" element={<PlaceDetails />} />
          <Route path="/places/new" element={<AddNewPlace />} />
          <Route path="/authenticate" element={<DataAuthentication />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
