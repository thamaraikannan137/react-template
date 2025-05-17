// React Imports
import React, { createContext, useContext, useState } from 'react';

const LayoutContext = createContext({
  navStyle: 'floating',
  layoutWidth: 'full',
  navCollapsed: false,
  setNavStyle: () => {},
  setLayoutWidth: () => {},
  setNavCollapsed: () => {}
});

export const useLayoutContext = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }) => {
  const [navStyle, setNavStyle] = useState('floating');
  const [layoutWidth, setLayoutWidth] = useState('full');
  const [navCollapsed, setNavCollapsed] = useState(false);

  const value = {
    navStyle,
    layoutWidth,
    navCollapsed,
    setNavStyle,
    setLayoutWidth,
    setNavCollapsed
  };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext; 