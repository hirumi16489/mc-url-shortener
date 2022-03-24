import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../logo.svg';

function Layout() {
  return (
    <div className="bg-main-blue min-h-screen">
      <header className="container mx-auto py-14 flex justify-between">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-white font-bold text-2xl">
          URL shortener
        </h1>
      </header>
      <main><Outlet /></main>
    </div>
  );
}

export default Layout;
