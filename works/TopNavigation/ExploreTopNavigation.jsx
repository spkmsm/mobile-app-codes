import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ExploreModal from '../Modal/ExploreModal';
import ExploreBackgroundImage from '../backgroundImage/ExploreBackgroundImage';

const ExploreTopNavigation = () => {
  const topNavigation = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <topNavigation.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 20,
          },
          tabBarStyle: {
            backgroundColor: 'green',
          },
        }}>
        <topNavigation.Screen name="Home" component={ExploreModal} />
        <topNavigation.Screen name="About" component={ExploreBackgroundImage} />
      </topNavigation.Navigator>
    </NavigationContainer>
  );
};

export default ExploreTopNavigation;
