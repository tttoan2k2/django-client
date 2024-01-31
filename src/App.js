import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TypeRoom from "./pages/TypeRoom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Feedback from "./pages/Feedback";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/type-room" element={<TypeRoom />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>
        </div>
    );
}
