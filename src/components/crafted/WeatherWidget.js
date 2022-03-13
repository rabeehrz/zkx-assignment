import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../core';
import { apiClient } from '../../utils/client';

const WeatherWidget = ({ id, location, onDelete }) => {
  const [locationData, setLocationData] = useState({
    loading: true,
    error: '',
    data: {},
  });

  const getLocationData = async () => {
    try {
      const { data: response } = await apiClient.get(
        `/${location.lat},${location.lng}`,
      );
      setLocationData({
        loading: false,
        error: '',
        data: {
          timezone: response.timezone,
          temperature: response.currently.temperature,
          windSpeed: response.currently.windSpeed,
          humidity: response.currently.humidity,
          summary: response.currently.summary,
          hourSummary: response?.minutely?.summary || '',
        },
      });
    } catch (error) {
      setLocationData({
        loading: false,
        error,
        data: {},
      });
    }
  };

  useEffect(() => {
    getLocationData();
  }, []);

  if (locationData.loading) return <></>;
  return (
    <div className="flex flex-col py-6 px-8 space-y-2">
      {locationData.error ? (
        <div className="px-2 py-4 text-md">
          Prometheus couldn't find latest data for {location.lat} and{' '}
          {location.lng}
        </div>
      ) : (
        <>
          <div className="flex">
            <div className="text-md px-2 py-4 bg-blue-100 text-blue-400 font-semibold flex items-center justify-center rounded-md">
              {locationData.data.temperature}'F
            </div>
            <div className="flex flex-col justify-between ml-4">
              <h4 className="text-lg font-medium leading-none text-darktext">
                {locationData.data.timezone} - {location.lat}, {location.lng}
              </h4>
              <div className="text-lighttext flex flex-col mt-3 space-y-1">
                <p className="text-xs font-medium">
                  {locationData.data.summary}
                </p>
                <p className="text-xs">{locationData.data.hourSummary}</p>
              </div>
            </div>
            <div className="ml-auto flex items-center space-x-0.5">
              <Link to={`/edit/${id}`}>
                <Button variant="primary">Edit</Button>
              </Link>
              <Button variant={'danger'} onClick={() => onDelete(id)}>
                Delete
              </Button>
            </div>
          </div>
        </>
      )}
      <div className="bg-gray-50 text-xs flex text-lighttext p-2 rounded-md space-x-2 items-center">
        <p>
          Wind Speed{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block transform rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </p>
        <p>{locationData.data.windSpeed || 'N/A'} KM/H</p>
        <p>Humidity {locationData.data.humidity || 'N/A'}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
