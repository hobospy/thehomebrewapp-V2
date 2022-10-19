import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BrewDetailPage from './brews/BrewDetailPage';
import BrewsPage from './brews/BrewsPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import ManageRecipePage from './recipes/ManageRecipePage';
import RecipeDetailPage from './recipes/RecipeDetailPage';
import RecipesPage from './recipes/RecipesPage';
import RedirectToRecipes from './recipes/RedirectToRecipes';
import WaterProfileDetailPage from './waterProfiles/WaterProfileDetailPage';
import WaterProfilesPage from './waterProfiles/WaterProfilesPage';

function App() {
  // const [theme, setTheme] = useState('light');
  const [theme] = useState('light');

  // function toggleTheme() {
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  //   document.documentElement.setAttribute('data-theme', theme);
  // }

  document.documentElement.setAttribute('data-theme', theme);
  return (
    <div className='container-fluid'>
      <Header />
      <Routes>
        <Route exact path='/' element={<RedirectToRecipes />} />
        <Route path='/brews' element={<BrewsPage />} />
        <Route path='/brews/:id' element={<BrewDetailPage />} />
        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='/recipes/:id' element={<RecipeDetailPage />} />
        <Route path='/recipe' element={<ManageRecipePage />} />
        <Route path='/waterProfiles' element={<WaterProfilesPage />} />
        <Route path='/waterProfiles/:id' element={<WaterProfileDetailPage />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
