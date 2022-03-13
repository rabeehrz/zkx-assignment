import React from 'react';

import Header from '../partials/Header';

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default DefaultLayout;
