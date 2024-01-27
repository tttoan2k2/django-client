// Import everything needed to use the `useQuery` hook

import { CreateUser } from "./components/CreateUser";
import DisplayUsers from "./components/DisplayUsers";
import Nav from "./components/Nav";

export default function App() {
    return (
        <div className="flex items-center justify-center flex-col">
            <h2>My first Apollo app 🚀</h2>
            <Nav />
            <CreateUser />
            <DisplayUsers />
        </div>
    );
}
