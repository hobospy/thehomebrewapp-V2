import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';

import WaterProfileList from './WaterProfileList';
import Spinner from '../common/Spinner';
import * as waterProfileActions from '../../redux/actions/waterProfileActions';

class WaterProfilesPage extends React.Component {
  state = {
    redirectToAddWaterProfilePage: false,
  };

  componentDidMount() {
    const { actions, waterProfiles } = this.props;

    if (waterProfiles.length === 0) {
      actions.loadWaterProfiles().catch((error) => {
        alert('Loading water profiles failed: ' + error);
      });
    }
  }

  handleDeleteWaterProfile = async (event, waterProfile) => {
    event.stopPropagation();
    toast.success('The ' + waterProfile.name + ' water profile was deleted');
    try {
      await this.props.actions.deleteWaterProfile(waterProfile);
    } catch (error) {
      toast.error(
        <div>
          Deletion of {waterProfile.name} failed with error message:
          <br /> {error.message}
        </div>,
        { autoClose: false }
      );
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddWaterProfilePage && (
          <Redirect to='/waterProfile' />
        )}
        <h2>Water Profiles</h2>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className='btn btn-primary'
              onClick={() =>
                this.setState({ redirectToAddWaterProfilePage: true })
              }
            >
              Add Water Profile
            </button>
            <WaterProfileList
              history={this.props.history}
              onDeleteClick={this.handleDeleteWaterProfile}
              waterProfiles={this.props.waterProfiles}
            />
          </>
        )}
      </>
    );
  }
}

WaterProfilesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  waterProfiles: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoading: state.apiCallsInProgress > 0,
    waterProfiles: state.waterProfiles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      // deleteRecipe: bindActionCreators(recipeActions.deleteRecipe, dispatch),
      // loadRecipes: bindActionCreators(recipeActions.loadRecipes, dispatch),
      loadWaterProfiles: bindActionCreators(
        waterProfileActions.loadWaterProfiles,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WaterProfilesPage);
