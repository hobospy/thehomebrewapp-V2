import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BrewDetail from './BrewDetail';
import RecipeDetail from '../recipes/RecipeDetail';
import Spinner from '../common/Spinner';

import * as brewActions from '../../redux/actions/brewActions';

export const BrewDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { brew, isLoading } = useSelector((store) => ({
    brew: store.brewDetail,
    isLoading: store.apiCallsInProgress > 0,
  }));

  useEffect(() => {
    dispatch(brewActions.loadBrew(parseInt(id)));
  }, []);

  return (
    <>
      {isLoading || brew === null ? (
        <Spinner />
      ) : (
        <>
          <div>
            {/* style={{ backgroundColor: 'blue', overflow: 'hidden' }}> */}
            <h2 className='header-text'>Brew</h2>
            <button
              className='btn btn-primary header-button'
              onClick={() => this.setState({ redirectToAddBrewPage: true })}
            >
              Edit Brew
            </button>
          </div>
          <BrewDetail brew={brew} />
          <RecipeDetail recipe={brew.recipe} />
        </>
      )}
    </>
  );
};

export default BrewDetailPage;
