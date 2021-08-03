import { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import CatListPage from '../../pages/CatListPage/CatListPage'
import NavBar from "../../components/NavBar/NavBar";
import LandingPage from '../LandingPage/LandingPage';
import CatDetailPage from "../CatDetailPage/CatDetailPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/cats">
              <CatListPage />
            </Route>
            <Route path='/details'>
                <CatDetailPage/>
            </Route>
            {/* <Route path="/orders">
              <OrderHistoryPage />
            </Route>
            <Redirect to="/cats" /> */}
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
