import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MapWidget } from '../components/crafted';
import Header from '../partials/Header';
import { StorageContext } from '../utils/StorageContext';
import { Button } from '../components/core';

const EditWeather = () => {
  const [location, setLocation] = useState();
  const { set, getAll } = useContext(StorageContext);
  const navigate = useNavigate();

  const { locationId } = useParams();

  useEffect(() => {
    const locations = getAll();
    if (!locations[locationId]) navigate('/');
    setLocation(locations[locationId]);
  }, []);

  const handleEditLocation = () => {
    set(locationId, { ...location });
    navigate('/');
  };

  if (!location) return <></>;

  return (
    <>
      <Header
        title="Add a new location"
        description={`${location.lat} ${location.lng}`}
      />
      <MapWidget
        location={location}
        setLocation={setLocation}
        center={location}
      />
      <div className="flex justify-center space-x-2 mt-4">
        <Button variant="primary" onClick={handleEditLocation}>
          Add
        </Button>
        <Link to="/">
          <Button variant={'primary-outline'}>Cancel</Button>
        </Link>
      </div>
    </>
  );
};

export default EditWeather;
