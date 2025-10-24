import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsernameGate from "./component/UsernameGate.jsx";
import Register from "./component/Register.jsx";
import Authenticate from "./component/Authenticate.jsx";
import Board from "./component/Board.jsx";

const appRouter = createBrowserRouter([
    { path: "/", element: <UsernameGate />},
    { path: "/register", element: <Register />},
    { path: "/authenticate", element: <Authenticate />},
    { path: "/board", element: <Board />},
    ]);

export default function AppRouter() {
    return <RouterProvider router={appRouter} />
}