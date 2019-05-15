import { Switch } from "react-router-dom";
import List from "./View";
import Create from "./Create";
import Read from "./Read";

const Routes = () => (
  <Switch>
    <Route exact path="/risk-assessments" component={List} />
    <Route exact path="/risk-assessments/create" component={Create} />
    <Route
      exact
      path="/risk-assessments/:riskAssessmentId/read"
      component={props => <Read {...props} type="risk-assessments" />}
    />
    <Route
      exact
      path="/risk-assessments/:riskAssessmentId?/:tabName?"
      component={Create}
    />
  </Switch>
);

export default routers;
