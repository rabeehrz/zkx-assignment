import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { WeatherWidget } from '../components/crafted';
import Header from '../partials/Header';
import { StorageContext } from '../utils/StorageContext';
import { Button } from '../components/core';

const ViewWeather = () => {
  const { getAll: getLocations, remove: removeLocation } =
    useContext(StorageContext);

  const [locations, setLocations] = useState(getLocations());

  const deleteHandler = (id) => {
    removeLocation(id);
    setLocations((prevLocations) => {
      const newLocations = { ...prevLocations };
      delete newLocations[id];
      return newLocations;
    });
  };

  return (
    <>
      <Header
        title="Prometheus"
        description={'You can add, edit and delete locations'}
      />
      {Object.keys(locations).map((id) => (
        <WeatherWidget
          key={id}
          id={id}
          location={locations[id]}
          onDelete={deleteHandler}
        />
      ))}
      <div className="flex justify-center mt-4">
        <Link to="/add">
          <Button className="w-64" variant="primary-outline">
            Add new location
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ViewWeather;
