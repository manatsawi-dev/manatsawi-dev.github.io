import React from 'react';
import HomeScreen from './home';
import RecentWorksScreen from './recent-works';
import SkillsScreen from './skills';
import MyProjectsScreen from './my-projects';

const IndexScreen = () => {
  return (
    <>
      <HomeScreen />
      <SkillsScreen />
      <RecentWorksScreen />
      <MyProjectsScreen />
    </>
  );
};

IndexScreen.propTypes = {};

export default IndexScreen;
