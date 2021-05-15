import React from 'react';
import HomeScreen from './home';
import RecentWorksScreen from './recent-works';

const IndexScreen = () => {
  return (
    <>
      <HomeScreen />
      <RecentWorksScreen />
    </>
  );
};

IndexScreen.propTypes = {};

export default IndexScreen;
