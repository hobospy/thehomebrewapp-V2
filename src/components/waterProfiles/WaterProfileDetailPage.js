import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import WaterProfileDetail from './WaterProfileDetail';
import Spinner from '../common/Spinner';

import * as waterProfileActions from '../../redux/actions/waterProfileActions';

export const WaterProfileDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { waterProfile, isLoading } = useSelector((store) => ({
    waterProfile: store.waterProfileDetail,
    isLoading: store.apiCallsInProgress > 0,
  }));

  useEffect(() => {
    dispatch(waterProfileActions.loadWaterProfile(parseInt(id)));
  }, []);

  const handleDeleteWaterProfile = async (event, waterProfile) => {
    event.stopPropagation();
    toast.success('The ' + waterProfile.name + ' profile was deleted');
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

  return (
    <>
      {isLoading || waterProfile === null ? (
        <Spinner />
      ) : (
        <>
          <div>
            <h2 className='header-text'>Water Profile</h2>
            <button
              className='btn btn-primary header-button-danger'
              onClick={(event) => handleDeleteWaterProfile(event, waterProfile)}
            >
              <DeleteIcon />
            </button>
            <button
              className='btn btn-primary header-button-standard'
              onClick={() =>
                this.setState({ redirectToAddWaterProfilePage: true })
              }
              style={{ marginRight: '5px' }}
            >
              <EditOutlinedIcon />
            </button>
          </div>
          <WaterProfileDetail waterProfile={waterProfile} />
        </>
      )}
    </>
  );
};

export default WaterProfileDetailPage;
