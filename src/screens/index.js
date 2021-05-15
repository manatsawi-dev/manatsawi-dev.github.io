import React from 'react';
import HomeScreen from './home';
import RecentWorksScreen from './recent-works';
import SkillsScreen from './skills';

const IndexScreen = () => {
  return (
    <>
      <HomeScreen />
      <SkillsScreen />
      <RecentWorksScreen />
    </>
  );
};

IndexScreen.propTypes = {};

export default IndexScreen;
