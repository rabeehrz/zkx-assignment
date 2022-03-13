import React from 'react';

const Header = ({ title, description }) => (
  <div className="flex bg-brand px-8 py-4 justify-between">
    <div className="flex flex-col space-y-2">
      <h2 className="text-white text-3xl">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
    <div className="flex items-center space-x-4 text-white justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  </div>
);

export default Header;
