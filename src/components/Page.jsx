import React, { useState } from 'react';
import Sidebar from './Sidebar';
import routes from '../routes';
import './Page.scss';
import Topbar from './Topbar';

function Page({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
  };
  const routesList = Object.values(routes);

  return (
    <div className="Page">
      <Sidebar
        links={routesList}
        isOpen={isSideBarOpen}
        handleClose={toggleSideBar}
      />
      <Topbar handleOnClick={toggleSideBar} />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Page;
