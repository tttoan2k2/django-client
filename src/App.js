import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TypeRoom from "./pages/TypeRoom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Admin from "./pages/Admin";
import AdminPlaces from "./pages/AdminPlaces";
import AdminUsers from "./pages/AdminUsers";
import PlaceAdd from "./pages/PlaceAdd";
import UserAdd from "./pages/UserAdd";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/type-room" element={<TypeRoom />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/:id" element={<Detail />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/places" element={<AdminPlaces />} />
                <Route path="/admin/users" element={<AdminUsers />} />
                <Route path="/admin/places/add-place" element={<PlaceAdd />} />
                <Route path="/admin/users/add-user" element={<UserAdd />} />
            </Routes>
        </div>
    );
}
