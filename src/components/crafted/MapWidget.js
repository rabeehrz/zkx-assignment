import React, { useMemo, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { google } from '../../config';

const containerStyle = {
  width: '100%',
  height: '75vh',
};

const defaultCenter = {
  lat: 53.46293362593782,
  lng: -2.2834321048083828,
};

const MapWidget = ({ location, setLocation, center }) => {
  const mapRef = useRef(null);

  const marker = useMemo(
    () => ({ lat: location.lat, lng: location.lng }),
    [location],
  );

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: google.mapKey,
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    mapRef.current = map;
    setTimeout(() => mapRef.current.panTo(marker), 200);
  }, []);

  const handleClick = (e) => {
    const { lat, lng } = e.latLng;
    const newLocation = { lat: lat(), lng: lng() };
    setLocation({
      lat: newLocation.lat,
      lng: newLocation.lng,
    });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={4}
      onLoad={onLoad}
      onClick={handleClick}
    >
      <Marker position={marker} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(MapWidget);
