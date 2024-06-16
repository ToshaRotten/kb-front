import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";

import RegisterView from "./Views/RegisterView";
import LoginView from "./Views/LoginView";
import UserView from "./Views/UserView";
import ImageView from "./Views/ImageView";
import RoleView from "./Views/RoleView";
import MessageView from "./Views/MainView";
import MainView from "./Views/MainView";
import LogView from "./Views/LogView.jsx";


function App() {
  const Test = () => {
    const routes = useRoutes([
      { path: "/", element: <MainView />},
      { path: "/log", element: <LogView />},
      { path: "/role", element: <RoleView />},
      { path: "/user", element: <UserView />},
      { path: "/image", element: <ImageView />},
      { path: "/message", element: <MessageView />},
      { path: "/register", element: <RegisterView />},
      { path: "/login", element: <LoginView /> },
    ]);
  return routes;
  };

  return (
    <>
        <Router>
            <Test/>
        </Router>
    </>
  );
}

export default App;
