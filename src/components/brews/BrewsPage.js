import PropTypes from 'prop-types';
import React from 'react';

import AddIcon from '@mui/icons-material/Add';

import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';

import BrewList from './BrewList';
import * as brewActions from '../../redux/actions/brewActions';
import Spinner from '../common/Spinner';

class BrewsPage extends React.Component {
  state = {
    redirectToAddBrewPage: false,
  };

  componentDidMount() {
    const { actions, brews } = this.props;

    if (brews.length === 0) {
      actions.loadBrews().catch((error) => {
        alert('Loading brews failed: ' + error);
      });
    }
  }

  handleDeleteBrew = async (event, brew) => {
    event.stopPropagation();
    toast.success('The ' + brew.name + ' brew was deleted');
    try {
      await this.props.actions.deleteBrew(brew);
    } catch (error) {
      toast.error(
        <div>
          Deletion of {brew.name} failed with error message:
          <br /> {error.message}
        </div>,
        { autoClose: false }
      );
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddBrewPage && <Navigate to='/brew' />}
        <div>
          <h2 className='header-text'>Brews</h2>
          <button
            className='btn btn-primary header-button-standard'
            onClick={() => this.setState({ redirectToAddBrewPage: true })}
          >
            <AddIcon />
          </button>
        </div>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <BrewList
            onDeleteClick={this.handleDeleteBrew}
            brews={this.props.brews}
          />
        )}
      </>
    );
  }
}

BrewsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  brews: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoading: state.apiCallsInProgress > 0,
    brews: state.brews,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteBrew: bindActionCreators(brewActions.deleteBrew, dispatch),
      loadBrews: bindActionCreators(brewActions.loadBrews, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewsPage);
