import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BrewDetail from './brews/BrewDetail';
import BrewsPage from './brews/BrewsPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import ManageRecipePage from './recipes/ManageRecipePage';
import RecipeDetail from './recipes/RecipeDetail';
import RecipesPage from './recipes/RecipesPage';
import WaterProfilesPage from './waterProfiles/WaterProfilesPage';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={RecipesPage} />
        <Route path='/brews' component={BrewsPage} />
        <Route path='/brew/:id' component={BrewDetail} />
        <Route path='/recipes' component={RecipesPage} />
        {/* <Route path='/recipe/:id' component={RecipeDetail} /> */}
        {/* TODO */}
        <Route
          path='/recipe/:id'
          render={(props) => (
            <RecipeDetail {...props} baseUrl={'Some base url'} />
          )}
        />
        <Route path='/recipe' component={ManageRecipePage} />
        <Route path='/waterProfiles' component={WaterProfilesPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
