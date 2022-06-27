import { Route, Switch, Redirect } from "react-router-dom";
import AuthContext from "./context/auth-context";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VehicleTracker from "./pages/VehicleTracker";
import { useContext } from "react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import PersonTracker from "./pages/PersonTracker";

const App = () => {
  const authContext = useContext(AuthContext);
  return (
      <Switch>
        <Route path='/' exact><LandingPage /></Route>
        {authContext.isAuthenticated && <Route path='/vehicle-tracker'><VehicleTracker /></Route>}
        {authContext.isAuthenticated && <Route path='/person-tracker'><PersonTracker /></Route>}
        {!authContext.isAuthenticated && <Route path='/vehicle-tracker'><Redirect to='/login' /></Route>}
        {!authContext.isAuthenticated && <Route path='/person-tracker'><Redirect to='/login' /></Route>}
        {authContext.isAuthenticated && <Route path='/dashboard'><Dashboard /></Route>}
        {!authContext.isAuthenticated && <Route path='/login'><Login /></Route>}
        {authContext.isAuthenticated && <Route path='/login'><Redirect to='/dashboard' /></Route>}
        {!authContext.isAuthenticated && <Route path='/signup'><Signup /></Route>}
        <Route path='*'>
          <Redirect to='/not-found' />
        </Route>
        {/* <Route path='/'></Route> */}
      </Switch>
  );
}

export default App;
