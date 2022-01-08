import { Route, Switch } from "react-router-dom";
import { Home, CharacterInfo } from "pages";

export const Routes = (
  <Switch>
    <Route exact={true} path={["/"]} component={Home} />
    <Route
      exact={true}
      path={["/character/:id/:name"]}
      component={CharacterInfo}
    />
  </Switch>
);
