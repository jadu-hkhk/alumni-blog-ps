import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

export default function Layout({ setIsAuthenticated, isAuthenticated }) {
    return (
        <div className="bg-custom-dark min-h-screen flex flex-col">
            <Topbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
            <main className="flex-grow flex items-center justify-center">
                <Outlet />
            </main>
        </div>
    );
}
