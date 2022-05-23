import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationNames} from './navigationNames';
import {createStackNavigator} from '@react-navigation/stack';

import {TabNavigationStyle, stackScreenOptions} from './bottomNavigationStyle';

import HomeScreen from '../screens/HomeScreen';
import ArchivesScreen from '../screens/ArchivesScreen';
import EditorScreen from '../screens/EditorScreen';
import ErrorScreen from '../screens/ErrorScreen';
import GenerateScreen from '../screens/GenerateScreen';
import InputScreen from '../screens/InputScreen';
import OutputScreen from '../screens/OutputScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home tab navigator.
const HomeTabStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name={NavigationNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen
        name={NavigationNames.InputScreen}
        component={InputScreen}
      />
    </Stack.Navigator>
  );
};

// Foods tab navigator.
const ArchivesTabStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.ArchivesScreen}
        component={ArchivesScreen}
      />
      {/* <Stack.Screen
        name={NavigationNames.CategoryDetailsScreen}
        component={CategoryDetailsScreen}
      />
      <Stack.Screen
        name={NavigationNames.CategoryItemDetailScreen}
        component={CategoryItemDetailScreen}
      /> */}
    </Stack.Navigator>
  );
};

// Add tab navigator
const EditorTabStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.EditorScreen}
        component={EditorScreen}
      />
    </Stack.Navigator>
  );
};

// Add tab navigator
const GenerateTabStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.GenerateScreen}
        component={GenerateScreen}
      />
    </Stack.Navigator>
  );
};

// Add tab navigator
const PlusTabStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.OutputScreen}
        component={OutputScreen}
      />
    </Stack.Navigator>
  );
};

// Tab navigator container and expert.
export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          // Tab bar icon component
          return <TabNavigationStyle route={route} focused={focused} />;
        },
      })}
      tabBarOptions={{
        style: {
          position: 'relative',
          height: 50,
          boxShadow: '10px 0px 50px #999999',
        },
        labelStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen name={NavigationNames.HomeTab} component={HomeTabStack} />
      <Tab.Screen
        name={NavigationNames.ArchivesTab}
        component={ArchivesTabStack}
      />
      <Tab.Screen name={NavigationNames.PlusTab} component={PlusTabStack} />
      <Tab.Screen name={NavigationNames.EditorTab} component={EditorTabStack} />
      <Tab.Screen
        name={NavigationNames.GenerateTab}
        component={GenerateTabStack}
      />
    </Tab.Navigator>
  );
};
