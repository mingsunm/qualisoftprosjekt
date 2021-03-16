import React, {useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FrontPage from './frontPage/frontPage';
import SuggestionPage from './suggestionPage/suggestionPage';
import OverviewPage from './overviewPage/overviewPage';
import DetailsPage from './detailsPage/detailsPage';
import LogInPage from './LogInPage/LogInPage';
import SubmitSuccess from './suggestionPage/submitSuccess';






function App() {
  
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route path="/suggestionHandin">
          <SuggestionPage/>
        </Route>
        <Route path="/submit/success">
          <SubmitSuccess />

        </Route>
        <Route path="/suggestionOverview">
          <OverviewPage/>
        </Route>
        <Route exact path="/suggestionDetails/:id" render={props => <DetailsPage {...props} />}>
        </Route>
        <Route path="/login">
          <LogInPage />

        </Route>
      </div>

    </Router>
    
  );
}

export default App;
