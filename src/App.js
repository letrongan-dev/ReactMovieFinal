import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate";
import HomePages from "./pages/Home";
import { LoginTemplate } from "./templates/AuthenticationTemplate/LoginTemplate";
import LoginPage from "./pages/Authentication/Login";
import { RegisterTemplate } from "./templates/AuthenticationTemplate/RegisterTemplate";
import RegisterPage from "./pages/Authentication/Register";
import UsersModal from "./pages/User";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={HomePages} />
        <HomeTemplate path="/home" exact Component={HomePages} />
        <HomeTemplate path="/home/user" exact Component={UsersModal} />
        <LoginTemplate path="/login" Component={LoginPage} />
        <RegisterTemplate path="/register" Component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
