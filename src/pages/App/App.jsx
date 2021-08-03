import { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import CatListPage from "../../pages/CatListPage/CatListPage";
import NavBar from "../../components/NavBar/NavBar";
import catsAPI from "../../utilities/cats-api";
import LandingPage from "../LandingPage/LandingPage";
import CatDetailPage from "../CatDetailPage/CatDetailPage";
import AddCatPage from "../AddCatPage/AddCatPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  const [cats, setCats] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getCats() {
      // retrieve the cats data
      const cats = await catsAPI.getAll();
      // set it to state
      setCats(cats);
    }
    getCats();
  }, []);

  useEffect(() => {
    // This is listenting for each time puppies state is changed,
    // then will run our function below to reroute
    history.push('/cats');
}, [cats, history]);


  async function handleAddCat(newCatData) {
    const newCat = await catsAPI.create(newCatData);
    setCats([...cats, newCat]);
  }

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
            <Route path="/details">
              <CatDetailPage />
            </Route>
            <Route path="/new">
              <AddCatPage handleAddCat={handleAddCat} />
            </Route>
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
