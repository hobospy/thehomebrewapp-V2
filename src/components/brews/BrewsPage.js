import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
        {this.state.redirectToAddBrewPage && <Redirect to='/brew' />}
        <>
          <h2 className='header-text'>Brews</h2>
          <button
            className='btn btn-primary header-button'
            onClick={() => this.setState({ redirectToAddBrewPage: true })}
          >
            Add Brew
          </button>
        </>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <BrewList
            history={this.props.history}
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
  history: PropTypes.object.isRequired,
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
