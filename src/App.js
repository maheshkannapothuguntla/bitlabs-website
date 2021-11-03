import React from "react";
import PrivacyPolicy from "./bitlabsfooter/PrivacyPolicy";
import Luckydrawn from "./luckydraw/index";
import registration from "./registration/index";
import ReferEarn from "./ReferEarn/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainFunction from "./Routing";
// import Bitlabsfooter from "./bitlabsfooter/index";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainFunction}></Route>
          <Route path="/privacy-policy" component={PrivacyPolicy}></Route>
          <Route path="/lucky-draw" component={Luckydrawn}></Route>
          <Route path="/register" component={registration}></Route>
          <Route path="/refer-and-earn" component={ReferEarn}></Route>
        </Switch>
      </Router>
      {/* <Bitlabsfooter /> */}
    </div>
  );
}
export default App;
