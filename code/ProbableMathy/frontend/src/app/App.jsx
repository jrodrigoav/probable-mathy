import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { NavigationComponent } from "./components/Navigation";
import { AboutPage } from "./pages/About";
import { HomePage } from "./pages/Home";
const HEADER_NAME="SESSIONID";
const createAppRouter = () => createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about",
                element: <AboutPage />
            }
        ]
    }
]);

function Layout() {
    return (
        <div className="container-fluid">
            <NavigationComponent />
            <Outlet />
        </div>
    );
}

export function App() {
    let sessionId = sessionStorage.getItem(HEADER_NAME);
    if(sessionId === null)
    {
        const date=new Date();
        if(navigator?.userAgent)
        {
            sessionId= `${crypto.randomUUID()}|${date.toISOString()}|${btoa(navigator.userAgent)}`;
        }
        else
        {
            sessionId = `${crypto.randomUUID()}|${date.toISOString()}|${btoa("AgentlessChump")}`;
        }
        sessionStorage.setItem(HEADER_NAME,sessionId);
    }
    return (
        <RouterProvider router={createAppRouter()} />
    );
}
