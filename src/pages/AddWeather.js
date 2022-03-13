import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { MapWidget } from '../components/crafted/';
import Header from '../partials/Header';
import { StorageContext } from '../utils/StorageContext';
import { Button } from '../components/core';

const defaultLocation = {
  lat: 53.46293362593782,
  lng: -2.2834321048083828,
};

const AddWeather = () => {
  const [location, setLocation] = useState(defaultLocation);
  const { set } = useContext(StorageContext);
  const navigate = useNavigate();

  const handleAddLocation = () => {
    const id = nanoid();
    set(id, { ...location });
    navigate('/');
  };

  return (
    <>
      <Header
        title="Add a new location"
        description={`${location.lat} ${location.lng}`}
      />
      <MapWidget
        location={location}
        setLocation={setLocation}
        center={defaultLocation}
      />
      <div className="flex justify-center space-x-2 mt-4">
        <Button variant="primary" onClick={handleAddLocation}>
          Add
        </Button>
        <Link to="/">
          <Button variant={'primary-outline'}>Cancel</Button>
        </Link>
      </div>
    </>
  );
};

export default AddWeather;
