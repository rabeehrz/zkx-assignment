import React, { createContext, useEffect } from 'react';

export const StorageContext = createContext({
  getAll: () => {},
  set: () => {},
  remove: () => {},
});

export const StorageProvider = ({ children }) => {
  useEffect(() => {
    if (!localStorage.getItem('locations'))
      localStorage.setItem('locations', JSON.stringify({}));
  }, []);

  const getAll = () => {
    return JSON.parse(localStorage.getItem('locations')) || {};
  };

  const set = (key, value) => {
    const currentLocations = JSON.parse(localStorage.getItem('locations'));
    currentLocations[key] = value;
    localStorage.setItem('locations', JSON.stringify(currentLocations));
    return currentLocations;
  };

  const remove = (key) => {
    const currentLocations = JSON.parse(localStorage.getItem('locations'));
    delete currentLocations[key];
    localStorage.setItem('locations', JSON.stringify(currentLocations));
  };

  return (
    <StorageContext.Provider
      value={{
        getAll,
        set,
        remove,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
