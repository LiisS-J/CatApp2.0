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
import UpdateCatPage from "../UpdateCatPage/UpdateCatPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  const [cats, setCats] = useState([]);
  const history = useHistory();
  const [catsArray, setCatsArray] = useState();

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
    // This is listenting for each time cats state is changed,
    // then will run our function below to reroute
    history.push("/cats");
  }, [cats, user]);

  async function handleAddCat(newCatData) {
    const newCat = await catsAPI.create(newCatData);
    setCats([...cats, newCat]);
  }

  async function handleUpdateCat(updatedCatData) {
    const updatedCat = await catsAPI.update(updatedCatData);
    const newCatsArray = cats.map((c) =>
      c._id === updatedCat._id ? updatedCat : c
    );
    setCats(newCatsArray);
  }

  async function handleDeleteCat(id) {
    console.log("   ~~~   handleDeleteCat(" + id + ")");
    await catsAPI.deleteOne(id);
    setCats(cats.filter((c) => c._id !== id));
  }

  return (
    <main className="App">
      <div className="mainPage">
        <NavBar className="navBar" user={user} setUser={setUser} />
        <Switch>
          {/* <Route exact path="/">
            <LandingPage />
          </Route> */}
          <Route path="/cats">
            <CatListPage className="catDetails" />
          </Route>
          <Route path="/details">
            <CatDetailPage user={user} handleDeleteCat={handleDeleteCat} />
          </Route>
          <Route path="/login">
            <AuthPage setUser={setUser} />
          </Route>
        </Switch>
      </div>

      {user ? (
        <div className="mainPage">
          <Switch>
            <Route path="/new">
              <AddCatPage handleAddCat={handleAddCat} />
            </Route>
            <Route exact path="/edit">
              <UpdateCatPage handleUpdateCat={handleUpdateCat} />
            </Route>
          </Switch>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
