import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

export default function Layout({ setIsAuthenticated, isAuthenticated }) {
    return (
        <div className="bg-custom-dark min-h-screen flex flex-col overflow-x-hidden">
            <Topbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
            <main className="flex-grow ">
                <Outlet />
            </main>
        </div>
    );
}
