import { BrowserRouter } from "react-router-dom";
import { Routes } from "routes/routes";
import UserContext from "context/User";
import { User } from "common/interfaces/User";
import { Header } from "components/Header";

const SKIP_LOGIN =
  process.env.NODE_ENV === "development" &&
  process.env.REACT_APP_SKIP_LOGIN === "on";

const logout = () => {};

function App() {
  const componentBase = (user: User) => (
    <div>
      <UserContext.Provider value={user}>
        <Header />
        <BrowserRouter children={Routes} basename={"/"} />
      </UserContext.Provider>
    </div>
  );

  if (SKIP_LOGIN === true) {
    return componentBase({
      email: "dev@atsistemas.com",
      firstName: "John",
      lastName: "Doe",
      permissions: [],
    });
  } else {
    return (
      <div>
        <span>Authenticated error</span>
        <div>
          <button onClick={logout}>Log out</button>
        </div>
      </div>
    );
  }
}

export default App;
