import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/index";
import Characters from "./Pages/characters";
import Character from "./Pages/character";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/character/:id" component={Character} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
